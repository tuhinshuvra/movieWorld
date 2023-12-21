import MoviesRatedSlider from './MoviesRatedSlider';
import './MoviesRatedSection.css';

const MoviesRatedSection = ({ movies }) => {
    return (
        <div className=' ratedMoviesSection'>
            <div className=' container'>
                <div className=' col-lg-10 mx-auto'>
                    <div className=''>
                        <div className=' text-center'>
                            <h1> <span className='upCommingText'> MOVIES YOU</span> <span className='moviesText'>RATED</span></h1>
                        </div>

                        <div className=' text-center'>
                            <MoviesRatedSlider movies={movies} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesRatedSection;