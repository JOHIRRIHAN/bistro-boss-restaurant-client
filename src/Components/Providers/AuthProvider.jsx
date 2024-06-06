/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from '../../../src/Firebase/firebase.config/'

export const AuthContext = createContext(null);
const Auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const logInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(Auth)
    }


    const updateUserProfile = (name, photo)=>{
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(()=>{
        const unSubsCribe = onAuthStateChanged(Auth, currentUser=>{
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubsCribe();
        }
    },[])



    const AuthInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;