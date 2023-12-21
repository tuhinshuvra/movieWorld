import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import Loader from "../Components/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);

    // console.log("Private Route : ", user?.email);

    const location = useLocation();

    if (loading) {
        return (
            <Loader></Loader>
        )
    }


    if (user?.email) {
        setLoading(false);
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;