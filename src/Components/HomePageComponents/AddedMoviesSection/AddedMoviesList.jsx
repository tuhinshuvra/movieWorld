import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../ContextApi/AuthProvider";
import './AddedMoviesSection.css';

const AddedMoviesList = () => {

    const { user } = useContext(AuthContext);

    const email = user?.email;
    const { data: myMovies = [], refetch } = useQuery({
        queryKey: ['myMovies'],
        queryFn: async () => {
            const respone = await fetch(`http://localhost:5000/myAddedMovies?email=${email}`);
            const data = respone.json();
            return data;
        }
    })

    console.log("AddedMoviesList : ==>", myMovies);
    const latestTwoMovies = myMovies.slice(-2);

    return (
        <div className=" d-md-flex addedMovieArea">
            {myMovies && latestTwoMovies.map((movie, index) => <>
                <div key={index} className=" mx-2 my-3 my-md-0">
                    <img className='AddedMovieImg' src={movie?.image} alt="" />
                    <button className=" btn btn-primary btn-lg rounded-5 editMovies">Edit Movies</button>
                </div>

            </>)}

            <div className=" d-flex justify-content-center align-items-center">
                <div className='AddedNewMovie' />
                <Link className=" btn btn-primary btn-lg rounded-5 AddMovieBtn px-4" to={"/addNewMovie"} >
                    <span className=" fs-5 me-3"> + </span>Add Movie</Link>
            </div>
        </div >
    );
};

export default AddedMoviesList;