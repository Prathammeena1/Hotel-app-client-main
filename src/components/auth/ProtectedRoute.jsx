import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return isLoggedIn ? children : navigate("/");
};

export default ProtectedRoute;
