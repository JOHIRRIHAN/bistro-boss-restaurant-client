/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;