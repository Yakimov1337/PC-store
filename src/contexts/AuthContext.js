import React, { useContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    const auth = useContext(AuthContext)

    return { ...auth, isAuthenticated: auth.user !== null }
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState();
    const [userId, setUserId] = useState();


    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function loginWithFacebook() {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth,provider)
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, []);


    auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        if (user !== null) {
            setUserId(user.uid)
        }
    });

    const value = {
        currentUser,
        userId,
        login,
        signup,
        logout,
        resetPassword,
        loginWithFacebook
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}