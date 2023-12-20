import AddedMoviesList from './AddedMoviesList';
import './AddedMoviesSection.css';

const AddedMoviesSection = () => {
    return (
        <div className='myAddedMoviesSection'>
            <div className=' container'>
                <div className=' col-lg-10 mx-auto'>
                    <div className=''>
                        <div className=' ms-md-4 text-center'>
                            <h1> <span className='upCommingText'>MY ADDED</span> <span className='moviesText'>MOVIES</span></h1>
                        </div>

                        <div className=' text-center'>
                            <AddedMoviesList></AddedMoviesList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedMoviesSection;