import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import NotFound from "../../pages/partials/NotFound";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    useEffect(()=>{
        if(!isLoggedIn){
            navigate("/");
        }
    },[])

    return isLoggedIn && children;
};

export default ProtectedRoute;
