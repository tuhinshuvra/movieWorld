import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import configUrl from "../../api/config";

const FogotPasswordPage = () => {
    const [enableOtp, setEnableOtp] = useState(false);
    const [otp, setOTP] = useState(null);
    const [phone, setPhone] = useState(null)
    const [phoneError, setPhoneError] = useState(null)
    const [enableSignup, setEnableSignup] = useState(false);
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [optMessage, setOTPMessage] = useState(null)
    const [otpError, setOTPError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [confirmPasswordError, setConfirmPasswordError] = useState(null)
    const [passwordMatchError, setPasswordMatchError] = useState(null)
    const [passwordPatternError, setPasswordPatternError] = useState(null)

    // console.log("OTP Data : ", otp);

    const navigate = useNavigate();


    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        if (phoneError && event.target.value) {
            setPhoneError('');
        }
    }

    const handlePhoneNoVerication = (event) => {
        event.preventDefault();
        if (phone) {
            setPhoneError("");
        } else {
            setPhoneError('Phone field cannot be empty');
        }

        fetch(`${configUrl.BASEURL}/api/findValidUserByMobileNumber/${phone}`)
            .then(response => response.json())
            .then(data => {
                if (data?.StatusCode === 2) {
                    setPasswordError('')
                    setEnableOtp(true);
                    setUserName(data?.resultUser?.username)
                    fetch(`${configUrl.BASEURL}/api/sms/:${phone}`)
                        .then(response => response.json())
                        .then(data => {
                            // console.log("OTP send to Phone : ", data);
                            const otp = data?.message.match(/\b\d{5}\b/);
                            setOTPMessage(otp)
                        })
                }
                if (data?.StatusCode === 1) {
                    setPhoneError("Phone no approved but still  JUBOF user account not created. Please create a new account by signup.")
                }

                else {
                    setPhoneError("Sorry! we have not find your phone no in JUBOF user list.");
                }
                // console.log("Phone no verifation Data: ", data);
            })
    }



    const handleOTPChange = (event) => {
        setOTP(event.target.value);
        if (otpError && event.target.value) {
            setOTPError('');
        }
    }

    const handleVerifyOTPClick = () => {
        if (otp) {
            setOTPError("");
        } else {
            setOTPError('OTP field cannot be empty');
        }
    };

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
        // Password regex pattern: At least 8 characters, 1 capital letter, 1 small letter, 1 numerical character
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        return pass === confPass && passwordPattern.test(pass);
    }

    const handleVerifyPhoneClick = () => {
        if (phone) {
            setPhoneError("");
        } else {
            setPhoneError('Phone field cannot be empty');
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
    }

    const submitData = {
        username: userName,
        newPassword: password,
    }

    const handleDataSubmit = (event) => {
        event.preventDefault();
        // console.log("submitData : ", submitData);
        if (password !== confirmPassword) {
            setPasswordPatternError('');
            setPasswordMatchError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
            if (!validatePassword(password, confirmPassword)) {
                setPasswordMatchError('');
                setPasswordPatternError("Password should be at least 8 characters long and must contain an alphabetic character and a numeric character.");
            } else {
                setPasswordPatternError('');
                fetch(`${configUrl.BASEURL}/api/forgetPassword`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(submitData)
                })
                    .then(response => response.json())
                    .then(data => {
                        // console.log("Forget password Data", data);
                        if (data?.status === 'success') {
                            navigate("/login");
                        }
                    })
                    .catch(error => {
                        // console.log("Error Occured : ", error.response.data);
                    })
            }
        }
    }


    return (
        <div className=" mx-md-0 mx-1">
            <div className="container col-xl-3 col-lg-4 col-md-6 mx-auto authArea">
                <h2 className="fw-bold my-4 text-center">Reset Forget Password</h2>

                {!enableOtp && <>
                    <div className='text-center'>
                        <h3 className=' text-center fs-5 mt-2 mb-0'>Phone Number Verification</h3>
                        <p className=' mt-0'>Enter the phone no, that you set on your membership request form</p>
                    </div>

                    <form onSubmit={handlePhoneNoVerication} className=" mb-5">
                        <div className="authInputArea">
                            <div className="mb-3  ">
                                <p className=" text-danger text-center my-0  small">{phoneError}</p>
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
                            <button onClick={handleVerifyPhoneClick} type="submit" className="btn btn-outline-secondary  w-25">Verify</button>
                        </div>
                    </form>
                </>}



                {(enableOtp && !enableSignup) && <>
                    <div className='text-center'>
                        <h3 className=' text-center fs-5 mt-2 mb-0'>OPT Verification</h3>
                        <p className=' mt-0'>Enter the verification code we have sent to your mobile</p>
                    </div>

                    <form onSubmit={handleOTPVerification} className="mb-5">
                        <div className="authInputArea">
                            <div className="mb-3">
                                {/* {optMessage &&
                                    <p className=" text-success fw-bold text-center">{optMessage}</p>
                                } */}
                                {/* <p className=" text-center text-primary">Please fill out the OTP field by the OTP we have sent to your mobile.</p> */}
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
                        <div className="d-flex justify-content-center mt-2 mb-3">
                            <button onClick={handleVerifyOTPClick} type="submit" className="btn btn-primary w-25">Verify</button>
                        </div>
                    </form>
                </>}


                {enableSignup && <>
                    <form onSubmit={handleDataSubmit}>
                        <h3 className=' text-center fs-5 mt-0 mb-3'>Set New Password</h3>

                        <div className=' text-center'>
                            <p className=' text-primary namePassInstruction'>
                                Please provide your password It should be at least 8 characters long and must contain an alphabetic character and a numeric character.
                            </p>
                        </div>
                        <div className="authInputArea mb-4">
                            <div className="mb-3  ">
                                <label htmlFor="userName" className="form-label fw-bold">User Name</label>

                                <input
                                    defaultValue={userName}
                                    type="text"
                                    name="userName"
                                    className="form-control"
                                    id="userName"
                                    disabled={true}
                                />
                            </div>


                            {passwordPatternError && <p className="text-danger text-center my-0">{passwordPatternError}</p>}
                            {passwordMatchError && <p className="text-danger text-center my-0">{passwordMatchError}</p>}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-bold">New Password</label>
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
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm New Password</label>
                                {confirmPasswordError && <p className="text-danger my-0">{confirmPasswordError}</p>}
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Re-enter password"
                                    required
                                    onChange={handleConfirmPasswordChange}
                                />
                            </div>
                        </div>
                        <div className="d-flex mt-4 mb-3">
                            <div className="col-4">
                                <button type="reset" className="btn btn-outline-info">Reset</button>
                            </div>
                            <div className="mx-auto col-8">
                                <button onClick={handleSubmitClick} type="submit" className="btn btn-outline-secondary w-50">Submit</button>
                            </div>
                        </div>
                    </form>
                </>
                }
            </div>
        </div>
    );
};

export default FogotPasswordPage;