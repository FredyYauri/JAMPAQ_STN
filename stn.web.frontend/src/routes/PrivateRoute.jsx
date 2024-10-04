// src/routes/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/Layout';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        // Mostrar un indicador de carga mientras se verifica el estado de autenticación
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated() ? (
            <Layout>
                <Component />
            </Layout>
        ) : (
            <Navigate to="/login" />
        )
    );
};

export default PrivateRoute;
