import HeroLeftText from './HeroLeftText';
import HeroRightSlider from './HeroRightSlider';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='heroContainer'>
            <div className='heroBg'>
                <div className='container'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='heroBgOverlay' />
                        <div className=' d-md-flex flex-lg-row-reverse heroContent'>
                            <div className='col-md-6'>
                                <HeroRightSlider></HeroRightSlider>
                            </div>
                            <div className='col-md-6'>
                                <HeroLeftText></HeroLeftText>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
