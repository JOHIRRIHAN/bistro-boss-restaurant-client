/* eslint-disable react/prop-types */
import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);





    const AuthInfo = {
        user,
        loading,
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;