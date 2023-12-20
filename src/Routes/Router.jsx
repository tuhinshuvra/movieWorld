import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../Pages/Authentication/LoginPage";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../Pages/Home/HomePage";
import SignupPage from "../Pages/Authentication/SignupPage";
import ImageUpload from "../Pages/Authentication/ImageUpload";
import WrongRoute from "./WrongRoute";
import MovieDetailsPage from "../Pages/Home/MovieDetailsPage";

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
                path: "/signup",
                element: <SignupPage></SignupPage>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
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