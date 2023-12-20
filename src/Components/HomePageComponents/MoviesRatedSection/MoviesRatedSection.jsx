import './MoviesRatedSection.css';
import MoviesRatedSlider from './MoviesRatedSlider';

const MoviesRatedSection = () => {
    return (
        <div>
            <div className=''>
                <div className=' text-center'>
                    <h2>MOVIES YOU RATED</h2>
                </div>

                <div className=' text-center'>
                    <MoviesRatedSlider></MoviesRatedSlider>
                </div>
            </div>
        </div>
    );
};

export default MoviesRatedSection;