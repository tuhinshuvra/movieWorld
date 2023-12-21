import MovieDetails from '../../assets/movieImages/Movie Details.jpg'
import { FaStar, FaRegStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";




import MovieBanner from '../../assets/moviePoster/movies-poster-16.jpg'
import './MovieDetailsPage.css';
import TopCastActors from '../../Components/MovieDetailsPageComponents/TopCastActors';

const MovieDetailsPage = () => {
    return (
        <div className=''>
            <div className=' moviesDetailsArea'>
                <div className='container'>
                    <div className=' col-md-10 mx-auto'>

                        <div className=' d-md-flex  gap-2 justify-content-center py-5 '>
                            <div className=' col-md-3'>
                                <img className='movieBannerImg' src={MovieBanner} alt="" />
                                <div className=' d-flex justify-content-between'>

                                    <div className=' my-3'>
                                        <h4><span className='detailsWhite my-0'> EPISODES</span> <span className=' detailsYellow'>121</span></h4>
                                        <h4><span className='detailsWhite my-0'> VIDEOS</span> <span className=' detailsYellow'>24</span></h4>
                                        <h4><span className='detailsWhite my-0'> PHOTOS</span> <span className=' detailsYellow'>90</span></h4>
                                    </div>
                                    <div className="d-flex text-white mt-3 " style={{ height: "150px" }}>
                                        <div className="vr"></div>
                                    </div>
                                </div>

                            </div>
                            <div className=' col-md-9'>
                                <img className='movieTrailerImg' src={MovieBanner} alt="" />
                                <div className=' my-3'>
                                    <p className=' fw-bolder text-white my-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non tempora amet? Asperiores officiis dignissimos minima laboriosam rerum amet ab, sit eius fuga obcaecati id assumenda pariatur nulla quis voluptate in unde aspernatur sint cum sed? Illo porro ad eveniet. </p>
                                    <p className=' fw-bolder  mt-3 mb-0'> <span className=' text-primary' >Creators : </span> <span className=' text-white'> Lorem ipsum dolor sit</span> </p>
                                    <p className=' fw-bolder  my-0'> <span className=' text-primary' >Stars : </span> <span className=' text-white'> Lorem ipsum dolor, Abcd efgh</span> </p>
                                    <div className='  my-0 '><FaStar className=' text-warning' /> <span className=' text-white'> 10(105) </span> <span><FaRegStar className=' text-primary' /></span> <span className=' text-white'>Rate Now</span> </div>
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
            {/* <img src={MovieDetails} className=' img-fluid' alt="" /> */}
        </div>
    );
};

export default MovieDetailsPage; 