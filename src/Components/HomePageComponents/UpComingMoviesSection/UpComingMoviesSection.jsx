import UpComingMoviesSlider from './UpComingMoviesSlider';
import './UpComingMoviesSection.css';

const UpComingMoviesSection = ({ movies }) => {
    return (
        <div>
            <div className='upComingMoveSection py-5'>
                <div className=' text-center text-white '>
                    <h1> <span className='upCommingText'> UPCOMING</span> <span className='moviesText'> MOVIES</span></h1>
                    <p className='upcomingSubText'>We constantly offer new moview</p>
                </div>

                <div className=' text-center'>
                    <UpComingMoviesSlider movies={movies} />
                </div>
            </div>
        </div >
    );
};

export default UpComingMoviesSection;