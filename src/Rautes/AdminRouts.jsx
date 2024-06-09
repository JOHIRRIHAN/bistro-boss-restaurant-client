import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { Children } from "react";

const AdminRouts = () => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user && isAdmin){
        return Children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default AdminRouts;