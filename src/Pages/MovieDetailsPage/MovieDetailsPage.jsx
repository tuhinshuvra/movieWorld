import { FaStar, FaRegStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import TopCastActors from '../../Components/MovieDetailsPageComponents/TopCastActors';
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import YouTube from 'react-youtube';
import './MovieDetailsPage.css';
import VideoPlayer from "./VideoPlayer";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    // console.log("Movie List", movies);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    useEffect(() => {
        fetch(`http://localhost:5000/show_movies`)
            .then(res => res.json())
            .then(data => {
                console.log("Movie List", data);
                setMovies(data);
            })
    }, [])



    // console.log("MovieDetailsPage id : ", movieId);

    const movie = movies.find((item) => item._id === movieId)

    // console.log("MovieDetailsPage : ", movie);



    return (
        <div className=''>
            <div className=' moviesDetailsArea'>
                <div className='container'>
                    <div className=' col-md-10 mx-auto'>
                        {/* <h2 className=" text-white text-center">{movie?.title}</h2> */}
                        <div className=' d-md-flex  gap-2 justify-content-center py-5 '>
                            <div className=' col-md-3'>
                                <img className='movieBannerImg' src={movie?.image} alt="" />
                                <div className=' d-flex justify-content-between'>

                                    <div className=' my-3'>
                                        <h4><span className='detailsWhite my-0'> EPISODES</span> <span className=' detailsYellow'>{movie?.episodes}</span></h4>
                                        <h4><span className='detailsWhite my-0'> VIDEOS</span> <span className=' detailsYellow'>{movie?.videos}</span></h4>
                                        <h4><span className='detailsWhite my-0'> PHOTOS</span> <span className=' detailsYellow'>{movie?.photos}</span></h4>
                                    </div>
                                    <div className="d-flex text-white mt-3 " style={{ height: "150px" }}>
                                        <div className="vr"></div>
                                    </div>
                                </div>

                            </div>
                            <div className=' col-md-9'>
                                <div className="movieTrailerImg">
                                    <VideoPlayer videoId={movie?.video} />
                                </div>

                                <div className=' my-3'>
                                    <p className=' fw-bolder text-white my-0'>{movie?.details}</p>
                                    <p className=' fw-bolder  mt-3 mb-0'> <span className=' text-primary' >Creators : </span> <span className=' text-white'>{movie?.creators}</span> </p>
                                    <p className=' fw-bolder  my-0'> <span className=' text-primary' >Stars : </span> <span className=' text-white'>{movie?.stars}</span> </p>
                                    <div className='  my-0 '><FaStar className=' text-warning' /> <span className=' text-white'>{movie?.rating}(105) </span> <span><FaRegStar className=' text-primary' /></span> <span className=' text-white'>Rate Now</span> </div>
                                </div>
                            </div>
                        </div>

                        <div className=' my-5'>
                            <div className=' d-flex mb-3 '>
                                <h2><span className=' text-white'> TOP</span> <span className=' text-primary'>CAST </span> </h2>
                                <IoIosArrowForward className='topCastArrow' />
                            </div>

                            <div>
                                <TopCastActors></TopCastActors>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage; 