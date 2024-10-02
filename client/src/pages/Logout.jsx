import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout = () => {

    const {logoutUser} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        logoutUser();
        navigate("/login");
    },[logoutUser])
};