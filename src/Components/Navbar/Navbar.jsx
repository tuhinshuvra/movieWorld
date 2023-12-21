import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from '../../assets/logo/movieWordLogo.png';
import "./Navbar.css";

const Navbar = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
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
                                        className="form-control SearchInput rounded-3 "
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
                                <li className="nav-item">
                                    <Link className="nav-link text-white" aria-current="page" to="/">
                                        Watch-list
                                    </Link>
                                </li>


                                {/* <li>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input customToggle" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    </div>

                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link   text-white" to="/">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav >
                </div>
            </div >
        </div >
    );
};

export default Navbar;
