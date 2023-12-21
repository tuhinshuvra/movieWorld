import PosterOne from '../../../assets/moviePoster/movies-poster-1.jpg';
import PosterTwo from '../../../assets/moviePoster/movies-poster-2.jpg';
import PosterThree from '../../../assets/moviePoster/movies-poster-3.jpg';
import PosterFour from '../../../assets/moviePoster/movies-poster-4.jpg';
import PosterFive from '../../../assets/moviePoster/movies-poster-5.jpg';
import PosterSix from '../../../assets/moviePoster/movies-poster-6.jpg';
import PosterSeven from '../../../assets/moviePoster/movies-poster-7.jpg';
import './HeroSection.css'

const HeroRightSlider = () => {
    return (
        <div className='heroSlider col-md-7 mx-auto' >
            <div id="heroSlider" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active text-center">
                        <img src={PosterOne} className="d-block heroPoster" alt="..." />
                        <button className='   watchNowBtn'>Watch Now</button>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={PosterTwo} className="d-block  heroPoster" alt="..." />
                        <button className='   watchNowBtn'>Watch Now</button>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={PosterThree} className="d-block  heroPoster" alt="..." />
                        <button className='   watchNowBtn'>Watch Now</button>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={PosterSeven} className="d-block  heroPoster" alt="..." />
                        <button className='   watchNowBtn'>Watch Now</button>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={PosterFour} className="d-block  heroPoster" alt="..." />
                        <button className='   watchNowBtn'>Watch Now</button>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={PosterFive} className="d-block  heroPoster" alt="..." />
                        <button className='   watchNowBtn'>Watch Now</button>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={PosterSix} className="d-block  heroPoster" alt="..." />
                        <button className='   watchNowBtn'>Watch Now</button>
                    </div>
                </div>
                <button className="carousel-control-prev customCtlPrev " type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next customCtlNext " type="button" data-bs-target="#heroSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroRightSlider;