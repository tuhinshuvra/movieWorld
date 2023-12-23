



import AddedMovieOne from "../../../assets/moviePoster/movies-poster-2.jpg"
import AddedMovieTwo from "../../../assets/moviePoster/movies-poster-1.jpg"
import './AddedMoviesSection.css';
import { Link } from "react-router-dom";

const AddedMoviesList = () => {
    return (
        <div className=" d-md-flex">
            <div>
                <img className='AddedMovieImg' src={AddedMovieTwo} alt="" />
                <button className=" btn btn-primary btn-lg rounded-5 editMovies">Edit Movies</button>
            </div>

            <div>
                <img className='AddedMovieImg mx-3' src={AddedMovieOne} alt="" />
                <button className=" btn btn-primary btn-lg rounded-5 editMovies">Edit Movies</button>
            </div>

            <div className=" d-flex justify-content-center align-items-center">
                <div className='AddedNewMovie' />
                <Link className=" btn btn-primary btn-lg rounded-5 AddMovieBtn px-4" to={"/addNewMovie"} >
                    <span className=" fs-5 me-3"> + </span>Add Movie</Link>
            </div>
        </div>
    );
};

export default AddedMoviesList;