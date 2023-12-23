import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../ContextApi/AuthProvider";
import useTitle from "../../../Hooks/UseTitle";
import './AddNewMovie.css';

const AddNewMovie = () => {
    useTitle("MovieEntry");
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();

    const createdDate = new Date();

    const imageHostKey = `755410aab80a39b03b11cf0eaecb66fb`;

    console.log("imageHostKey : ", imageHostKey);


    const handleNewMovieEntry = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    {/* // title image video details episodes     videos    photos    creators    stars    rating */ }
                    const movieInfo = {
                        userEmail: user?.email,
                        userName: user?.displayName,

                        title: data.title,
                        details: data.details,
                        image: imgData.data.url,

                        video: data.video,
                        episodes: data.episodes,
                        videos: data.videos,
                        photos: data.photos,
                        creators: data.creators,
                        stars: data.stars,
                        rating: data.rating,

                        createdDate: createdDate
                    };

                    console.log("Movie Info Data :", movieInfo);

                    axios({
                        url: `http://localhost:5000/save_movie`,
                        method: "POST",
                        headers: { 'Content-type': 'application/json; charset=UTF-8' },
                        data: movieInfo,
                    })
                        .then((response) => {
                            // console.log("blog data: ", response);
                            if (response.data) {
                                toast("The movie  addeed successfully!");
                                navigate("/");
                            }
                            // const destination = location?.state?.from || "/";
                            // navigate(location?.state?.from || "/", { replace: true });
                        })
                }
            })
    }



    return (
        // <div className="movieEntryArea">
        <div className="">
            <div className=" col-lg-6 mx-auto p-4">

                <h2 className=" text-center fw-bold my-4">Movie Entry</h2>
                <form onSubmit={handleSubmit(handleNewMovieEntry)}>

                    <div className="">
                        <label htmlFor="title"><b>Movie Title</b></label>
                        <input
                            {...register("title", { required: true })}
                            name="title"
                            className="input form-control my-lg-3"
                            id="title"
                            type="text"
                            placeholder="Enter movie title"
                        />
                    </div>

                    <div>
                        <label htmlFor="title"><b>Movie Details</b></label>
                        <textarea
                            {...register("details", { required: true })}
                            name="details"
                            className="input form-control my-lg-3"
                            id="details"
                            type="text"
                            placeholder="Enter movie details"
                            maxLength={1500}
                        />
                    </div>

                    <label htmlFor="title"><b>Movie Photo</b></label>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Photo</span> </label>
                        <input type="file"
                            name='image'
                            {...register("image", { required: true })}
                            placeholder="Image"
                            className="input input-bordered w-full"
                        />
                        {errors.photo && <p className='text-red-600'>Upload Product Photo</p>}
                    </div>

                    <div className="">
                        <label htmlFor="videoLink">
                            <b>Video Link</b>
                        </label>
                        <input
                            {...register("videoLink", { required: true })}
                            name="videoLink"
                            className="input form-control my-lg-3"
                            id="videoLink"
                            type="text"
                            placeholder="Enter video link"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="episods">
                            <b>Episods</b>
                        </label>
                        <input
                            {...register("episods", { required: true })}
                            name="episods"
                            className="input form-control my-lg-3"
                            id="episods"
                            type="number"
                            placeholder="Enter no of episod"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="photos">
                            <b>Photos</b>
                        </label>
                        <input
                            {...register("photos", { required: true })}
                            name="photos"
                            className="input form-control my-lg-3"
                            id="photos"
                            type="number"
                            placeholder="Enter no of photo"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="creators">
                            <b>Creators</b>
                        </label>
                        <input
                            {...register("creators", { required: true })}
                            name="creators"
                            className="input form-control my-lg-3"
                            id="creators"
                            type="text"
                            placeholder="Enter creator's name"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="stars">
                            <b>Stars</b>
                        </label>
                        <input
                            {...register("stars", { required: true })}
                            name="stars"
                            className="input form-control my-lg-3"
                            id="stars"
                            type="text"
                            placeholder="Add star name with comma(,)"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="rating">
                            <b>Rating</b>
                        </label>
                        <input
                            {...register("rating", { required: true })}
                            name="rating"
                            className="input form-control my-lg-3"
                            id="rating"
                            type="text"
                            placeholder="Add rating"
                        />
                    </div>




                    <div className=" d-flex justify-content-between my-lg-5">
                        <button type="reset" className="btn btn-outline-warning fw-bold">Reset</button>
                        <button type="submit" name="submit" className="btn btn-outline-secondary px-5 ">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewMovie;
