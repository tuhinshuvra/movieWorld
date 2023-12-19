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
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
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
                                    className="form-control SearchInput"
                                    placeholder="Search movies"
                                />
                            </div>
                        </div>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" to="/">
                                    Movies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" to="/">
                                    Watch-list
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchCheckChecked"
                                        placeholder="En"
                                        checked={isChecked}
                                        onChange={handleToggle}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexSwitchCheckChecked"
                                    >
                                        {isChecked ? "EN" : "BN"}
                                    </label>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" to="/">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
