import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const storeTokenInLocalStorage = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    }

    const isLoggedIn = token;

    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ storeTokenInLocalStorage, logoutUser, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}

