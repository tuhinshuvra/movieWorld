import Carousel from 'react-grid-carousel'
import { IoStar } from "react-icons/io5";
import { FaPlus, FaCircleChevronRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import './WatchListSlider.css'


const WatchListSlider = ({ movies }) => {
    return (
        <div>
            <Carousel cols={5} rows={1} gap={10} loop>
                {movies?.map((item, index) => (
                    <Carousel.Item key={index} className="text-center">
                        <div className='ratedCarousolItem'>
                            <img className='ratedCarImg' width="100%" src={item?.image} alt={`Movie Poster ${index + 1}`} />
                            <div className='bg-black rounded-bottom-1'>
                                <h3 className='text-white text-center my-0'>{item?.title}</h3>
                                <div className='my-0 text-white float-start ms-1'>
                                    <IoStar className='text-success' />
                                    <span className='mx-1'>{item?.rating}</span>

                                </div>
                                <button className='btn btn-primary rounded-5 w-100 my-2'>
                                    <FaPlus /> <span className='ms-2'> Watch List</span>
                                </button>
                                <div className='d-flex justify-content-start'>
                                    <Link to={`/trailer/${item?._id}`} className='text-decoration-none me-auto text-white ms-1 my-1'>
                                        <FaCircleChevronRight />
                                        <span className='ms-1'>
                                            Trailer
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default WatchListSlider;