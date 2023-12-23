import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from '../../assets/logo/movieWordLogo.png';
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../ContextApi/AuthProvider";
import toast from "react-hot-toast";
import "./Navbar.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log("Login User Data: ", user);


    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User logout successfully!", { duration: 1000 });
                navigate("/");
            })
            .catch((error) => {
                console.log("Error : ", error);
            });
    };

    return (
        <div className="bg-black">
            <div className="container">
                <div className=" col-lg-10 mx-auto">
                    <nav className="navbar navbar-expand-lg  text-white ">
                        <Link className="navbar-brand fw-bolder" to="/">
                            <img className="navLogo" src={Logo} alt="" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="searchForm">
                                    <FaSearch className="searchIcon " />
                                    <input
                                        type="text"
                                        className="form-control searchInput rounded-3 "
                                        placeholder="Search movies"
                                    />
                                </div>
                            </div>

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link className="nav-link  text-white" aria-current="page" to="/">
                                        Movies
                                    </Link>
                                </li>
                                {user?.email &&
                                    <li className="nav-item">

                                        {/* <HashLink smooth to="/#watchList" className="nav-link text-white" aria-current="page">
                                            Watch-list
                                        </HashLink> */}
                                    </li>
                                }

                                {user?.email ? < div className=" d-lg-flex justify-content-center align-items-center">
                                    <li className="nav-item">
                                        <Link className="nav-link   text-white" to="/">
                                            <FaUserTie className=" mb-lg-1" />
                                        </Link>
                                    </li>
                                    <li className=" mx-lg-3">
                                        <Link className="dropdown-item fw-bold text-warning" onClick={handleLogOut}>LogOut</Link>
                                    </li>

                                </div>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link   text-white" to="/login">
                                                Login
                                            </Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </nav >
                </div>
            </div >
        </div >
    );
};

export default Navbar;
