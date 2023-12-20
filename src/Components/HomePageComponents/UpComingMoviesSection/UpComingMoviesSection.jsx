import './UpComingMoviesSection.css';
import UpComingMoviesSlider from './UpComingMoviesSlider';

const UpComingMoviesSection = () => {
    return (
        <div>
            <div className=''>
                <div className=' text-center'>
                    <h2>UPCOMING MOVIES</h2>
                    <p>We constantly offer new moview</p>
                </div>

                <div className=' text-center'>
                    <UpComingMoviesSlider></UpComingMoviesSlider>
                </div>
            </div>
        </div>
    );
};

export default UpComingMoviesSection;