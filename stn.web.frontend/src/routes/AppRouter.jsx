import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../modules/auth/LoginPage';
import DashboardPage from '../modules/dashboard/DashboardPage';
import ProfilePage from '../modules/profile/ProfilePage';
import PrivateRoute from './PrivateRoute';
import { ProductPage } from '../modules/products/ProductPage';
import {machineFile}from '../modules/machine/machineFile';

const AppRouter = () => (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas privadas */}            
            <Route path="/dashboard/*" element={<PrivateRoute component={DashboardPage} />} />
            <Route path="/profile/*" element={<PrivateRoute component={ProfilePage} />} />
            <Route path="/productos/*" element={<PrivateRoute component={ProductPage} />} />
            <Route path="/equipos/*"   element={<PrivateRoute component={machineFile}/>}/>
            {/* Ruta por defecto para 404 */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
);

export default AppRouter;