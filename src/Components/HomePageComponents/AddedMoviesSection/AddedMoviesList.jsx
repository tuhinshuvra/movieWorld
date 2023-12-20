

import AddedMovieOne from "../../../assets/moviePoster/movies-poster-10.jpg"
import AddedMovieTwo from "../../../assets/moviePoster/movies-poster-11.jpg"
import './AddedMoviesSection.css';

const AddedMoviesList = () => {
    return (
        <div className=" d-md-flex">
            <div>
                <img className='AddedMovieImg' src={AddedMovieTwo} alt="" />
                <button className=" btn btn-primary btn-lg rounded-5 editMovies ">Edit Movies</button>
            </div>

            <div>
                <img className='AddedMovieImg mx-3' src={AddedMovieOne} alt="" />
                <button className=" btn btn-primary btn-lg rounded-5 editMovies ">Edit Movies</button>
            </div>

            <div className=" d-flex justify-content-center align-items-center">
                <div className='AddedNewMovie' />
                <button className=" btn btn-primary btn-lg rounded-5 AddMovieBtn px-4 "> <span className=" fs-5 me-3"> + </span>  Add Movie</button>
            </div>
        </div>
    );
};

export default AddedMoviesList;