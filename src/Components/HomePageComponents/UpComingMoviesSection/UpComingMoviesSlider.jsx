import { Link, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import MovieOne from "../../../assets/moviePoster/movies-poster-1.jpg"
import MovieTwo from "../../../assets/moviePoster/movies-poster-2.jpg"
import MovieThree from "../../../assets/moviePoster/movies-poster-3.jpg"
import MovieFour from "../../../assets/moviePoster/movies-poster-4.jpg"
import MovieFive from "../../../assets/moviePoster/movies-poster-5.jpg"
import MovieSix from "../../../assets/moviePoster/movies-poster-6.jpg"
import MovieSeven from "../../../assets/moviePoster/movies-poster-7.jpg"
import './UpComingMoviesSection.css'

const UpComingMoviesSlider = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Marquee pauseOnHover={true} gradient={false}>
                {/* {allEvents && */}
                {/* allEvents?.map((item, index) => { */}
                {/* return ( */}
                {/* <div className='AllEventCard flex-container' key={index}> */}
                <div className='upCommingMovieCard flex-container'>
                    {/* <div onClick={() => navigate(`/events/${item?.id}`)}> */}
                    <div className=' text-white'>
                        {/* <img src={item?.image} className='allEventImage' alt="" /> */}
                        <img src={MovieOne} className='upCommingMovieImg' alt="" />
                        <h1>THIS IS MOVIE TITLE</h1>


                        {/* <div className='text-center mt-2'>
                                        <p className='fw-bold my-0 '>{item?.title.slice(0, 27)}</p>
                                        <p className='my-0'><b>Venue:</b> {item?.events}</p>
                                        {item?.start_date &&
                                            <p className='flex my-0 justify-center'>
                                                <BsCalendarDateFill />
                                                <span className='ms-1 text-sm'>{formatDate(item?.start_date)}</span>
                                                {item?.date && <> <span className=''> -</span> <span className='text-sm'> {formatDate(item?.date)}</span></>}
                                            </p>
                                        }
                                    </div> */}
                    </div>
                    {/* <Link className='btn btn-outline-secondary   btn-sm w-full minTopMargin' to={`/events/${item?.id}`}>Show Details</Link> */}
                    <Link className='btn btn-outline-secondary   btn-sm w-full minTopMargin' to={`/events/`}>Show Details</Link>
                </div>
                {/* ); */}
                {/* })} */}
            </Marquee>

        </div>
    );
};

export default UpComingMoviesSlider;