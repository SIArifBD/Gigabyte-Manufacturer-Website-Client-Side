import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';
import Loading from '../SharedPage/Loading';

const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [notAdmin, notAdminLoading] = useUser(user);
    const location = useLocation();

    if (loading || notAdminLoading) {
        return <Loading></Loading>
    }
    if (!user || !notAdmin) {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireUser;