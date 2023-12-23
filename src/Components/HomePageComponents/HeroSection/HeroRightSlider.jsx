import { Link } from 'react-router-dom';
import './HeroSection.css'

const HeroRightSlider = ({ movies }) => {

    // console.log("HeroRightSlider :", movies)

    return (
        <div className='heroSlider col-md-7 col-7 mx-auto'>
            <div id="heroSlider" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    {movies?.map((item, index) => (
                        <div key={index} className={`carousel-item text-center ${index === 0 ? 'active' : ''}`}>
                            <img src={item?.image} className="d-block heroPoster" alt="..." />
                            <Link to={`/movieDetails/${item?._id}`}>
                                <button className='watchNowBtn'>Watch Now</button>
                            </Link>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev customCtlPrev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next customCtlNext" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroRightSlider;