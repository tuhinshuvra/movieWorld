import FooterLogo from '../../assets/logo/movieWordLogo.png';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerArea bg-black text-white  ">
            <div className="container">
                <div className="container">
                    <footer className=" py-1">
                        <div className=" d-md-flex">
                            <div className="col-md-4  mb-3">
                                <p className=" fw-bold">UPCOMING MOVIES</p>
                                <ul className="nav flex-column  text-white">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4 mb-3">
                                <p className=" fw-bold">ADDITIONAL PAGES</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                                </ul>
                            </div>



                            <div className="col-md-4">
                                <img src={FooterLogo} className='footerLogo' alt="" />
                                <p>
                                    © {new Date().getFullYear()}
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam adipisci voluptate,
                                    Lorem, ipsum dolor sit amet consectetur
                                </p>

                            </div>
                        </div>

                        {/* <hr /> */}

                        <div className="d-flex   justify-content-center   border-top">
                            {/* <p>&copy; 2023 Company, Inc. All rights reserved.</p> */}
                            <p className="text-center my-3 small">Copyright © {new Date().getFullYear()} MovieWorld. All rights reserved</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;