import { AuthContext } from "../context/auth-context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    
    if (context === undefined) {
        throw new Error("useAuthContext must be used within a AuthContextProvider");
    }
    return context;
}