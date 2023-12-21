import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../Pages/Home/HomePage";
import ImageUpload from "../Pages/Authentication/ImageUpload";
import WrongRoute from "./WrongRoute";
import MovieDetailsPage from "../Pages/Home/MovieDetailsPage";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "movieDetails",
                element: <MovieDetailsPage />
            },


            // {
            //     path: "/updateProfilePhoto",
            //     element: <PrivateRoute> <ProfileImageUpdate></ProfileImageUpdate></PrivateRoute>
            // },



            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },


            {
                path: "/imageUpload",
                element: <PrivateRoute> <ImageUpload /></PrivateRoute>
            },

        ]
    },

    {
        path: "*",
        element: <WrongRoute></WrongRoute>
    }
]);

export default Router;