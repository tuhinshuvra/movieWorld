import Carousel from 'react-grid-carousel'
import PosterOne from "../../../assets/moviePoster/movies-poster-1.jpg";
import PosterTwo from "../../../assets/moviePoster/movies-poster-2.jpg";
import PosterThree from "../../../assets/moviePoster/movies-poster-3.jpg";
import PosterFour from "../../../assets/moviePoster/movies-poster-4.jpg";
import PosterFive from "../../../assets/moviePoster/movies-poster-5.jpg";
import PosterSix from "../../../assets/moviePoster/movies-poster-6.jpg";
import PosterSeven from "../../../assets/moviePoster/movies-poster-7.jpg";
import './MoviesRatedSection.css'
import { IoStar } from "react-icons/io5";
import { FaPlus, FaCircleChevronRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';


const MoviesRatedSlider = () => {
    return (
        <div>
            <Carousel cols={5} rows={1} gap={10} loop>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterOne} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterTwo} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterSeven} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterThree} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterOne} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterFive} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterFour} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterOne} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterTwo} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="ratedCarousolItem text-center ">
                    <img className='ratedCarImg' width="100%" src={PosterSeven} />
                    <div className='  bg-black'>
                        <h3 className='text-white text-center my-0'>MOVIE TITLE</h3>
                        <div className=' my-0 text-white float-start ms-1'>
                            <IoStar className=' text-success' />
                            <span className=' mx-1'> 500</span>
                            <IoStar className=' text-warning' />
                        </div>
                        <button className=' btn btn-primary  rounded-5 w-100 my-2'>
                            <FaPlus /> <span className='ms-2'> Watch List</span>
                            {/* <TiTick /> <span> Watch List</span> */}
                        </button>
                        <div className=' d-flex justify-content-start'>
                            <Link className=' text-decoration-none me-auto text-white ms-1 my-1'>
                                <FaCircleChevronRight />
                                <span className=' ms-1'>
                                    Trailer
                                </span>
                            </Link>

                        </div>
                    </div>
                </Carousel.Item>


            </Carousel>

        </div>
    );
};

export default MoviesRatedSlider;