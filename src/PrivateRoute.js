// src/PrivateRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ user, children }) => {
//   return user ? children : <Navigate to="/" />;
// };

// export default PrivateRoute;

import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


//public protection
function ProtectedRouter() {
    const { userInfo } = useSelector((state) => state.userLogin);

    return userInfo?.token ? <Outlet/> : <Navigate to="/login"/>
}


//admin router protection
function AdminProtectedRouter() {
    const { userInfo } = useSelector((state) => state.userLogin);

    return userInfo?.token ? (
        userInfo?.isAdmin ? (
            <Outlet/>
        ) : (
            <Navigate to="/*"/>
        )
    )  : (
        <Navigate to="/login"/>
    );
}
export {ProtectedRouter, AdminProtectedRouter}

