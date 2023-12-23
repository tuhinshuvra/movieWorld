import HeroLeftText from './HeroLeftText';
import HeroRightSlider from './HeroRightSlider';
import './HeroSection.css';

const HeroSection = ({ movies }) => {
    return (
        <div className='heroContainer'>
            <div className='heroBg'>
                <div className='container'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='heroBgOverlay' />
                        <div className=' d-md-flex   heroContent'>
                            <div className='col-md-6'>
                                <HeroLeftText />
                            </div>
                            <div className='col-md-6'>
                                <HeroRightSlider movies={movies} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
