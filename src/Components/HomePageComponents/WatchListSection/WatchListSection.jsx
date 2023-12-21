import WatchListSlider from './WatchListSlider';
import './WatchListSlider.css';

const WatchListSection = ({ movies }) => {
    return (
        <div className='watchListSection'>
            <div className=' container'>
                <div className=' col-lg-10 mx-auto'>
                    <div className=''>
                        <div className=' ms-md-4'>
                            <h1> <span className='upCommingText'>YOUR</span> <span className='moviesText'>WATCH-LIST</span></h1>
                        </div>

                        <div className=' text-center'>
                            <WatchListSlider movies={movies} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchListSection;