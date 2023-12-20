import HeroLeftText from './HeroLeftText';
import HeroRightSlider from './HeroRightSlider';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div>
            <div className=' d-md-flex flex-lg-row-reverse'>
                <div className=' col-md-6'>
                    <HeroRightSlider></HeroRightSlider>
                </div>
                <div className=' col-md-6'>
                    <HeroLeftText></HeroLeftText>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;