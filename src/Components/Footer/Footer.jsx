import FooterLogo from '../../assets/logo/movieWordLogo.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";



import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerArea text-white pt-md-5 ">
            <div className="container">
                <div className="container">
                    <footer className=" py-1">
                        <div className=" d-md-flex">
                            <div className="col-md-4  mb-3">
                                <p className=" fw-bold footerHeading">UPCOMING MOVIES</p>
                                <ul className="nav flex-column ">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Animal</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Jawan</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Tiger 3</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Pathan</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Action 2</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4 mb-3">
                                <p className=" fw-bold footerHeading">ADDITIONAL PAGES</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Terms & Condition</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Privacy Policy</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary">Cooky Policy</a></li>
                                </ul>
                            </div>



                            <div className="col-md-4">
                                <img src={FooterLogo} className='footerLogo' alt="" />
                                <p>
                                    © {new Date().getFullYear()}
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam adipisci voluptate,
                                    Lorem, ipsum dolor sit amet consectetur
                                </p>
                                <div className=' d-flex align-items-center'>
                                    <FaFacebook className=' fs-5 footerIconColor' />
                                    <AiFillTwitterCircle className=' fs-4 mx-2 footerIconColor' />
                                    <TiSocialLinkedinCircular className=' fs-3 footerIconColor' />
                                </div>

                            </div>
                        </div>

                        {/* <hr /> */}

                        <div className="d-flex   justify-content-center   border-top">
                            <p className="text-center text-secondary my-3 small">Copyright © {new Date().getFullYear()} MovieWorld. All rights reserved</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;