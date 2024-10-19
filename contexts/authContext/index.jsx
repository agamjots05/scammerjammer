import { useEffect, useState, useContext } from "react"; 
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    
    // use effect
    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);
    
    // initialize user
    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user }); // spread arg
            setUserLoggedIn(true);
        } else { // user has logged off
            setCurrentUser(null);
            setUserLoggedIn(false);
        }   
        setLoading(false);
    }

    // expose value obj
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}