import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";
import configUrl from "../../api/config";
import "./Login.css";

const SignupPage = () => {
    const [enableSignup, setEnableSignup] = useState(false);
    const [enableOtp, setEnableOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otp, setOTP] = useState(null);
    const [phone, setPhone] = useState(null);
    const [otpError, setOTPError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [userName, setUserName] = useState(null);
    const [optMessage, setOTPMessage] = useState(null);
    const [password, setPassword] = useState(null);
    const [membershipID, setMembershipID] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [passwordMatchError, setPasswordMatchError] = useState(null);
    const [passwordPatternError, setPasswordPatternError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [status, setStatus] = useState(false);

    const navigate = useNavigate();

    const handlePhoneNoVerication = (event) => {
        const phone = event.target.phone.value;
        event.preventDefault();
        setStatus(true)
        fetch(`${configUrl.BASEURL}/api/statusUpdate/${phone}`)
            .then(response => response.json())
            .then(data => {
                if (data?.data?.Enabled_On === 'approved') {
                    axios.get(`${configUrl.BASEURL}/api/v1/userAccount/${data?.data?._id}`)
                        .then(result => {
                            if (result.data.statusCode == 1) {
                                setErrorMessage('');
                                setErrorMessage("This mobile number ALREADY EXIST in our system. So, please login.");
                                setStatus(false);
                                return;
                            }
                            setEnableOtp(true);
                            setMembershipID(data?.data?._id)
                            // toast.success('Contratultion your membership request approved.')
                            setErrorMessage('')
                            fetch(`${configUrl.BASEURL}/api/sms/${phone}`)
                                // fetch(`${configUrl.BASEURL}/api/sms/01725601944`)
                                .then(response => response.json())
                                .then(data => {
                                    setStatus(false)
                                    // console.log("OTP send to Phone : ", data);
                                    const otp = data?.message.match(/\b\d{5}\b/);
                                    setOTPMessage(otp);
                                })
                        })
                        .catch(error => {
                            setErrorMessage('');
                            setErrorMessage(error.message);
                            // console.log("error.message : ", error.message);
                            setStatus(false);
                        })
                } else if (data?.data?.Enabled_On === 'pending') {
                    setStatus(false)
                    setErrorMessage('Your membership request NOT YET APPROVED. You will be informed by SMS and Email after APPROVAL.');

                } else if (data?.statusCode === 2) {
                    setStatus(false)
                    setErrorMessage('Your mobile no already exists in JUBOF user list. Please login.');
                }
                else {
                    setStatus(false)
                    setErrorMessage('No membership request was found from this mobile number. Please send a membership request.');
                }
                // console.log("Phone no verifation Data: ", data);
            })
    }

    const handleOTPVerification = (event) => {
        event.preventDefault();
        const typedOTP = event.target.otp.value;
        // console.log("typedOTP: ", typedOTP);

        if (optMessage == typedOTP) {
            setOTPError('OTP verification successful.');
            setEnableSignup(true);
            setOTPError('');
        } else {
            setOTPError("OTP verification failed. Please try again.")
        }
    };



    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        if (phoneError && event.target.value) {
            setPhoneError('');
        }
    }

    const handleOTPChange = (event) => {
        setOTP(event.target.value);
        if (otpError && event.target.value) {
            setOTPError('');
        }
    }

    const handleUserNameChange = (event) => {
        const username = event.target.value;
        setUserName(username);

        if (userNameError) {
            setUserNameError('');
        }

        if (username.length < 4) {
            setUserNameError('Username must be at least 4 characters long');
        } else {
            setUserNameError('');
        }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (passwordError && validatePassword(event.target.value, confirmPassword)) {
            setPasswordError('');
        }
        if (confirmPasswordError) {
            setConfirmPasswordError('');
        }
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        if (passwordError && validatePassword(password, event.target.value)) {
            setPasswordError('');
        }
        if (confirmPasswordError) {
            setConfirmPasswordError('');
        }
    }

    const validatePassword = (pass, confPass) => {
        // Password regex pattern: At least 8 characters, at least one letter, at least one numeric character
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        return pass === confPass && passwordPattern.test(pass);
    };

    const handleVerifyClick = () => {
        if (otp) {
            setOTPError("");
        } else {
            // setOTPError('OTP field cannot be empty');
        }
    };


    const handleSubmitClick = () => {
        if (password) {
            setPasswordError('');
        } else {
            setPasswordError('Password cannot be empty');
        }

        if (confirmPassword) {
            setConfirmPasswordError('');
        } else {
            setConfirmPasswordError('Confirm password cannot be empty');
        }

        if (userName) {
            setUserNameError('');
        } else {
            setUserNameError('Username cannot be empty');
        }
    }

    const signUpData = {
        username: userName,
        password: password,
        id: membershipID
    }


    const handleSignupDataSubmit = (event) => {
        setLoading(true);
        setErrorMessage("")
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMatchError('Passwords do not match');
            setPasswordPatternError('');
            setLoading(false);
        } else {
            setConfirmPasswordError('');
            if (!validatePassword(password, confirmPassword)) {
                setPasswordMatchError('');
                setPasswordPatternError("Password should be at least 8 characters long and must contain an alphabetical character and a numeric character.");
                setLoading(false)
            } else {
                setPasswordPatternError('');
                // toast.success('Congratulations! You have successfully signed up');
                fetch(`${configUrl.BASEURL}/api/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signUpData)
                })
                    .then(response => response.json())
                    .then(data => {
                        // console.log("Signup Data", data);
                        if (data?.status === 'success') {
                            navigate("/login");
                            setErrorMessage("");
                            setLoading(false);
                        }
                        else {
                            setErrorMessage(data.message)
                            // console.log(data)
                            setLoading(false);
                        }
                    })
                    .catch(error => {
                        // console.log("Error Occured : ", error.response.data);
                        setErrorMessage("");
                        setLoading(false);
                    })
            }
        }
    }
    if (loading) {
        return (
            <Loader></Loader>
        )
    }
    return (
        <div className="mx-md-0 mx-1 ">
            <div className=" container col-xl-3 col-lg-4 col-md-6 mx-auto authArea">

                <h2 className=" fw-bold my-4 text-center"> Signup Form</h2>

                <h6 className="text-danger my-4 text-center">{errorMessage && errorMessage}</h6>

                {!enableOtp && <>
                    <div className='text-center'>
                        <h3 className=' text-center fs-5 mt-2 mb-0'>Phone Number Verification</h3>
                        <p className=' mt-0'>Enter the phone no, that you set on your membership request form</p>
                    </div>

                    <form onSubmit={handlePhoneNoVerication} className=" mb-5">
                        <div className="authInputArea">
                            <div className="mb-3  ">
                                <label htmlFor="otp" className="form-label fw-bold">Phone</label>
                                <input
                                    type="number"
                                    name="phone"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter phone no"
                                    required
                                    onChange={handlePhoneChange}
                                />
                            </div>
                        </div>

                        <div className=" d-flex justify-content-center mt-2 mb-3">
                            {status ? <>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </> : <>
                                <button onClick={() => handleVerifyClick()} type="submit" className="btn btn-outline-secondary  w-25">Verify</button>
                            </>}
                        </div>
                    </form>


                </>}


                {(enableOtp && !enableSignup) && <>
                    <div className='text-center'>
                        <h3 className=' text-center fs-5 mt-2 mb-0'>OPT Verification</h3>
                        <p className=' mt-0'>Enter the verification code we have sent to your mobile</p>
                    </div>
                    <form onSubmit={handleOTPVerification} className=" mb-5">
                        <div className="authInputArea">
                            <div className="mb-3  ">
                                {/* {optMessage &&
                                    <p className=" text-success fw-bold text-center">{optMessage}</p>
                                } */}
                                {otpError &&
                                    <p className=" text-danger text-center">{otpError}</p>
                                }
                                <label htmlFor="otp" className="form-label fw-bold">OTP</label>
                                <input
                                    type="text"
                                    name="otp"
                                    className="form-control"
                                    id="otp"
                                    placeholder="Enter OTP"
                                    required
                                    onChange={handleOTPChange}
                                />
                            </div>
                        </div>

                        <div className=" d-flex justify-content-center mt-2 mb-3">
                            <button onClick={handleVerifyClick} type="submit" className="btn btn-outline-secondary w-25">Verify</button>
                        </div>
                    </form>
                </>}

                {enableSignup && <>
                    <form onSubmit={handleSignupDataSubmit}>
                        <div className='text-center  mx-auto'>
                            <h3 className=' text-center fs-4 fw-bold mt-2 mb-1'>Setup Credential</h3>
                            <p className=' text-primary namePassInstruction'>
                                Enter a username of a minimum of 4 characters and provide a password, It should be at least 8 characters long and must contain an alphabetic character and a numeric character.
                            </p>
                        </div>

                        <div className=" authInputArea mb-4">
                            {passwordPatternError && <p className="text-danger my-0">{passwordPatternError}</p>}
                            {passwordMatchError && <p className="text-danger my-0">{passwordMatchError}</p>}

                            <div className="mb-3  ">
                                <label htmlFor="userName" className="form-label fw-bold">User Name</label>
                                {userNameError && <p className="text-danger my-0">{userNameError}</p>}
                                <input
                                    type="text"
                                    name="userName"
                                    className="form-control"
                                    id="userName"
                                    placeholder="Enter user name"
                                    required
                                    onChange={handleUserNameChange}
                                />
                            </div>

                            <div className="mb-3  ">
                                <label htmlFor="password" className="form-label fw-bold">Password</label>
                                {passwordError && <p className="text-danger my-0">{passwordError}</p>}
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                    onChange={handlePasswordChange}
                                />
                            </div>

                            <div className="mb-3  ">
                                <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm Password</label>
                                {confirmPasswordError && <p className="text-danger my-0">{confirmPasswordError}</p>}
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Retyper password"
                                    required
                                    onChange={handleConfirmPasswordChange}
                                />
                            </div>
                        </div>

                        <div className="d-flex mt-4 mb-3">
                            <div className="col-5">
                                <button type="reset" className="btn btn-outline-secondary">Reset</button>
                            </div>
                            <div className="mx-auto col-7">
                                <button onClick={handleSubmitClick} type="submit" className="btn btn-secondary ">Submit</button>
                            </div>
                        </div>
                    </form>
                </>}
            </div>
        </div>
    );
};

export default SignupPage;