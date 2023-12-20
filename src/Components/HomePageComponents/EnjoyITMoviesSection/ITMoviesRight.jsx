import PosterOne from '../../../assets/moviePoster/itMoviewPoster.jpg';
import { BiSolidChevronRightCircle } from "react-icons/bi";

import './EnjoyITMoviesSection.css'

const ITMoviesRight = () => {
    return (
        <div className='itMovieTrailer text-center'>
            <img className='itMovieTrailerImg mb-0' src={PosterOne} alt="" />
            <hr className="border border-secondary border-5 my-0   opacity-75" />
            <div className="trailerTextArea">
                <button className=' text-white trailerTextBtn '>
                    <BiSolidChevronRightCircle className=' fs-2' />
                    <span className=' fs-5  '>TRAILER</span>
                </button>
            </div>
        </div>
    );
};

export default ITMoviesRight;