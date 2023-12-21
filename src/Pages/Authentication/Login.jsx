import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../ContextApi/AuthProvider";
import "./Login.css";
import useTitle from "../../Hooks/UseTitle";

const Login = () => {
    useTitle("Login");
    const { user, signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [loginError, setLoginError] = useState("");

    const handleLogin = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                toast.success("User Login Successfully", { duration: 1000, position: 'top-center', icon: '👏' });
                navigate(from, { replace: true });
                console.log("Login User : ", user);
                // setLoginUserEmail(data.email);
                localStorage.clear();
            })
            .catch((error) => {
                setLoginError(error.message);
                toast.error(error.message);
                // console.log(error);
            });
        // console.log(data);
    };



    // const userType = allUser.find((user)=> user.email === loginUser.email )

    const handleShowPassword = () => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };



    return (
        <div>
            <section className="gradient-form" style={{}}>
                <div className="container  ">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-lg-6 my-5">
                            <div
                                className="card-body login_form p-5"
                                style={{ backgroundColor: "#EEF1F6" }}
                            >
                                <form
                                    onSubmit={handleSubmit(handleLogin)}
                                    className=" rounded rounded-2 bg-sm p-5 "
                                >
                                    {loginError && (
                                        <p className=" font-bold text-red-600">
                                            {loginError}
                                        </p>
                                    )}
                                    <div className="">
                                        <h3 className=" mb-4 text-center fw-bold">
                                            Login
                                        </h3>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="username">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="username"
                                                {...register("email", {
                                                    required: "Email address is required",
                                                })}
                                                className="form-control"
                                                placeholder=" Enter email address"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 6,
                                                        message:
                                                            "Password must be minimum 6 characters",
                                                    },
                                                })}
                                                className="form-control"
                                                placeholder="Enter password"
                                            />
                                        </div>

                                        {/* show password */}
                                        <input type="checkbox" onClick={handleShowPassword} />
                                        <span className=" ms-2"> Show Password</span>

                                        {errors.password && (
                                            <p className=" text-red-600" role="alert">
                                                {errors.password?.message}
                                            </p>
                                        )}
                                        <div className="text-center pt-1 mb-5 pb-1">
                                            <button
                                                className=" btn  btn-outline-secondary px-5  mb-3"
                                                type="submit"
                                                value="login"
                                            >
                                                Log In
                                            </button>

                                        </div>
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2">Don't have an account?</p>
                                            <Link className=" text-decoration-none fw-bolder" to="/register">
                                                Create new
                                            </Link>
                                        </div>
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaFacebook />
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaGoogle />
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaTwitter />
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <FaGithub />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;