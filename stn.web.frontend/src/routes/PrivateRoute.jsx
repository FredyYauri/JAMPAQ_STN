// src/routes/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/Layout';
import Loading from '../components/common/loaders/loaders';
import { useStnStore } from '../stores/useStateStore';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();
    const { loading } = useStnStore();
    console.log('PrivateRoute isAuthenticated', isAuthenticated());
    return (
        <>
       {loading && <Loading />}
       { isAuthenticated() ? (
            <Layout>
                <Component />
            </Layout>
        ) : (
            <Navigate to="/login" />
        )}


        
        </>
        
    );
};

export default PrivateRoute;
