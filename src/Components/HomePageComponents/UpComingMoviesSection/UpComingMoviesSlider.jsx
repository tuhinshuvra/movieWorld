import Marquee from 'react-fast-marquee';
import './UpComingMoviesSection.css'

const UpComingMoviesSlider = ({ movies }) => {
    return (
        <div>
            <Marquee pauseOnHover={true} gradient={false}>
                {movies &&
                    movies?.map((item, index) => {
                        return (
                            <div key={index} className='upCommingMovieCard flex-container'>
                                <div className=' text-white mx-2'>
                                    <img
                                        // src={item?.image || 'fallback-image-url.jpg'}
                                        src={`${item?.image}.jpg`}
                                        className='upCommingMovieImg'
                                        alt="upCommingMovieImg"
                                    />
                                    <div className='upComingMovieTitle'>
                                        <h3 className=''>{item?.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </Marquee>
        </div>
    );
};

export default UpComingMoviesSlider;