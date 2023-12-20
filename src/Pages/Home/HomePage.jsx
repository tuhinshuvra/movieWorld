import EnjoyITMoviesSection from '../../Components/HomePageComponents/EnjoyITMoviesSection/EnjoyITMoviesSection';
import HeroSection from '../../Components/HomePageComponents/HeroSection/HeroSection';
import UpComingMoviesSection from '../../Components/HomePageComponents/UpComingMoviesSection/UpComingMoviesSection';
import './Homepage.css';

const HomePage = () => {
    // const { user } = useContext(AllContext);

    return (
        <div className=" ">
            <HeroSection></HeroSection>
            <UpComingMoviesSection></UpComingMoviesSection>
            <EnjoyITMoviesSection></EnjoyITMoviesSection>
        </div>
    );
};

export default HomePage; 