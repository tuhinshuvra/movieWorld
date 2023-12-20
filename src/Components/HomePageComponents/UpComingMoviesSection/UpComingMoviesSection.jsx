import './UpComingMoviesSection.css';
import UpComingMoviesSlider from './UpComingMoviesSlider';
import Marquee from "react-fast-marquee";

const UpComingMoviesSection = () => {
    return (
        <div>
            <div className='upComingMoveSection py-5'>
                <div className=' text-center text-white '>
                    <h1>UPCOMING MOVIES</h1>
                    <p>We constantly offer new moview</p>
                </div>

                <div className=' text-center'>
                    <UpComingMoviesSlider></UpComingMoviesSlider>
                </div>
            </div>
        </div >
    );
};

export default UpComingMoviesSection;