import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AllContext } from "../hooks/ContextData";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AllContext);

    const location = useLocation();


    if (user && user?.token) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;