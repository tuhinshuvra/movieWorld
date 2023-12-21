import { useContext, useEffect, useState } from 'react';
import AddedMoviesSection from '../../Components/HomePageComponents/AddedMoviesSection/AddedMoviesSection';
import EnjoyITMoviesSection from '../../Components/HomePageComponents/EnjoyITMoviesSection/EnjoyITMoviesSection';
import HeroSection from '../../Components/HomePageComponents/HeroSection/HeroSection';
import MoviesRatedSection from '../../Components/HomePageComponents/MoviesRatedSection/MoviesRatedSection';
import UpComingMoviesSection from '../../Components/HomePageComponents/UpComingMoviesSection/UpComingMoviesSection';
import WatchListSection from '../../Components/HomePageComponents/WatchListSection/WatchListSection';
import { AuthContext } from '../../ContextApi/AuthProvider';
import './Homepage.css';

const HomePage = () => {
    const { user } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);

    console.log("Movie List", movies);

    useEffect(() => {
        fetch(`http://localhost:5000/show_movies`)
            .then(res => res.json())
            .then(data => {
                // console.log("Movie List", data);
                setMovies(data);
            })
    }, [])

    return (
        <div className="">
            <HeroSection movies={movies} />
            <UpComingMoviesSection movies={movies} />
            <EnjoyITMoviesSection />

            {user?.email && <>
                <MoviesRatedSection movies={movies} />
                <WatchListSection movies={movies} />
                <AddedMoviesSection />
            </>}

        </div>
    );
};

export default HomePage; 