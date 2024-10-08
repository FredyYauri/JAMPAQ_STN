import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../modules/auth/LoginPage';
import DashboardPage from '../modules/dashboard/DashboardPage';
import ProfilePage from '../modules/profile/ProfilePage';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
        <Routes>
            {/* Ruta por defecto redirige a Login */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Ruta p�blica para el login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas privadas */}            
            <Route path="/dashboard/*" element={<PrivateRoute component={DashboardPage} />} />
            <Route path="/profile/*" element={<PrivateRoute component={ProfilePage} />} />

            {/* Ruta por defecto para 404 */}
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
);

export default AppRouter;