import './WatchListSlider.css';
import WatchListSlider from './WatchListSlider';

const WatchListSection = () => {
    return (
        <div>
            <div className=''>
                <div className=''>
                    <h2>YOUR WATCH-LIST</h2>
                </div>

                <div className=' text-center'>
                    <WatchListSlider></WatchListSlider>
                </div>
            </div>
        </div>
    );
};

export default WatchListSection;