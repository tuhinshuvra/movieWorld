import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../Pages/Home/HomePage";
import WrongRoute from "./WrongRoute";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import MovieDetailsPage from "../Pages/MovieDetailsPage/MovieDetailsPage";
import AddNewMovie from "../Components/HomePageComponents/AddedMoviesSection/AddNewMovie";

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
                path: "movieDetails/:movieId",
                element: <MovieDetailsPage />
            },
            {
                path: "addNewMovie",
                element: <PrivateRoute> <AddNewMovie /></PrivateRoute>
            },

            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },

        ]
    },

    {
        path: "*",
        element: <WrongRoute></WrongRoute>
    }
]);

export default Router;