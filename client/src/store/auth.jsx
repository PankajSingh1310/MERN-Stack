import { createContext, useContext } from "react";

export const AuthContext = createContext();

const storeTokenInLocalStorage = (token) => {
    return localStorage.setItem("token", token);
}

export const AuthProvider = ({children}) => {
    return <AuthContext.Provider value={{storeTokenInLocalStorage}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

