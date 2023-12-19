import { useState, useEffect, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { authenticate, isAuth } from '../../utlis/helper';
import configUrl from '../../api/config';
import Loader from '../../Components/Loader/Loader';
import './Login.css';

const LoginPage = () => {
    const { setUser } = useContext(AllContext);
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const formRef = useRef(null);

    useEffect(() => {
        const handleEnterKey = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleLoginClick();
            }
        };

        const formElement = formRef.current;

        if (formElement) {
            formElement.addEventListener('keydown', handleEnterKey);
        }

        return () => {
            if (formElement) {
                formElement.removeEventListener('keydown', handleEnterKey);
            }
        };
    }, []);



    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (usernameError && event.target.value) {
            setUsernameError('');
        }
        if (!event.target.value) {
            setShowPassword(false);
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (passwordError && event.target.value) {
            setPasswordError('');
        }
        if (!event.target.value) {
            setShowPassword(false);
        }
    };

    const handleNextClick = () => {
        if (username) {
            setShowPassword(true);
        } else {
            setUsernameError('Username cannot be empty');
        }
    };

    const handleLoginClick = () => {
        if (password) {
            setPasswordError('');
        } else {
            setPasswordError('Password cannot be empty');
        }
    };


    const handleLogin = (event) => {
        setLoading(true);
        event.preventDefault();
        const newUserName = username.toLocaleLowerCase()

        const loginData = {
            username: newUserName,
            password,
        };

        // console.log("loginData : ", loginData);
        const apiUrl = `${configUrl.BASEURL}/api/login`
        fetch(apiUrl, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(response => response.json())
            .then(data => {
                if (data?.token) {
                    authenticate(data, () => {
                        setUser(isAuth())
                        setLoading(false);
                    })
                    // console.log("Login User Token : ", token);
                    navigate('/home');
                }
                if (!data?.username) {
                    setLoginError('Wrong username or password.')
                    setLoading(false);
                }
            })
            .catch(error => {
                // console.log("Error Occured : ", error.response.data);
                setLoading(false);
            })

    };

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div className="d-lg-flex">

            <div className="col-lg-3 my-md-0">
                <div className="col-11 mx-auto my-lg-5 my-3 text-center ">
                    {/* <img className="loginLogo me-2" src={Logo} alt="" /> */}
                    <h4 className=" jubofNameText text-success fw-bold my-auto">Jahangirnagar University <br /> BCS Officers' Forum</h4>
                    <h4 className="jubofNameText text-success fw-bold my-auto text-center">(JUBOF)</h4>
                </div>

                <div className="col-lg-10 col-11 mx-auto text-center">
                    <h5 className="forgetpassText text-success text-center  mt-1">If you have already submtitted data in JUBOF Application and have User name and Password</h5>
                </div>
                <div className="col-lg-10 col-11 mx-auto text-center">
                    <h5 className="forgetpassText text-success text-center  mt-1">Login with username and password</h5>
                </div>


                <div className="col-lg-10 col-11 mx-auto">
                    {loading && <>
                        <Loader></Loader>
                    </>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <p className=' text-danger text-center'>{loginError}</p>
                            <label htmlFor="name" className="form-label fw-bold">
                                Username
                            </label>
                            {usernameError && <p className="text-danger my-0">{usernameError}</p>}
                            <input
                                onChange={handleUsernameChange}
                                className="form-control"
                                type="text"
                                name="name"
                                id="name"
                                aria-describedby="emailHelp"
                                required
                                value={username}
                            />
                        </div>
                        {!showPassword && (
                            <div className=' d-flex flex-column'>
                                <div className=' text-center'>
                                    <button onClick={handleNextClick} className="btn btn-outline-secondary w-50">Next</button>
                                </div>

                                <p className=' forgetpassText text-center text-success my-2 '>
                                    <span className=' my-0'>If you forget your password, please click on </span>
                                    <Link className="text-decoration-none text-center my-0 ms-1" to="/forgotPassword">Forgot password</Link>
                                </p>
                            </div>
                        )}
                        {showPassword && (
                            <>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bold">
                                        Password
                                    </label>
                                    {passwordError && <p className="text-danger my-0">{passwordError}</p>}
                                    <input
                                        onChange={handlePasswordChange}
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        value={password}
                                    />
                                </div>


                                <div className=' text-center'>
                                    <button onClick={handleLoginClick} type="submit" className="btn  btn-outline-secondary  w-50  my-1">
                                        <span className=' fw-bold'>  Login</span>
                                    </button>
                                </div>
                                <p className=' fs-5 text-center text-success my-2'>
                                    <span className=' my-0'>If you forget your password, please click on </span>
                                    <Link className="text-decoration-none text-center my-0 ms-1" to="/forgotPassword">Forgot password</Link>
                                </p>
                            </>
                        )}
                    </form>

                </div>
                <div className="col-11  mx-auto text-center py-3 py-lg-5">
                    <h5 className=" forgetpassText text-success text-center  mt-1">If you are new to the JUBOF application and have not submitted data in the JUBOF application yet, please submit
                        <Link className="text-decoration-none ms-2" to="/membership">Membership Request.</Link>
                    </h5>
                </div>
            </div>


        </div>
    );
};

export default LoginPage;