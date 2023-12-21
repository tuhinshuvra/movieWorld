import { useContext } from 'react';
import AddedMoviesSection from '../../Components/HomePageComponents/AddedMoviesSection/AddedMoviesSection';
import EnjoyITMoviesSection from '../../Components/HomePageComponents/EnjoyITMoviesSection/EnjoyITMoviesSection';
import HeroSection from '../../Components/HomePageComponents/HeroSection/HeroSection';
import MoviesRatedSection from '../../Components/HomePageComponents/MoviesRatedSection/MoviesRatedSection';
import UpComingMoviesSection from '../../Components/HomePageComponents/UpComingMoviesSection/UpComingMoviesSection';
import WatchListSection from '../../Components/HomePageComponents/WatchListSection/WatchListSection';
// import homePageImg from '../../assets/movieImages/Home.jpg'
import { AuthContext } from '../../ContextApi/AuthProvider';
import './Homepage.css';

const HomePage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="">
            <HeroSection></HeroSection>
            <UpComingMoviesSection></UpComingMoviesSection>
            <EnjoyITMoviesSection></EnjoyITMoviesSection>

            {user?.email && <>
                <MoviesRatedSection></MoviesRatedSection>
                <WatchListSection></WatchListSection>
                <AddedMoviesSection></AddedMoviesSection>
            </>}

            {/* <img src={homePageImg} className=' img-fluid' alt="" /> */}
        </div>
    );
};

export default HomePage; 