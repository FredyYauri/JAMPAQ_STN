import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../modules/auth/LoginPage';
import DashboardPage from '../modules/dashboard/DashboardPage';
import ProfilePage from '../modules/profile/ProfilePage';
import PrivateRoute from './PrivateRoute';
import { ProductPage } from '../modules/products/ProductPage';
import {MachinePage}from '../modules/machine/machinePage';
import {MachineMaintenance} from '../modules/machine/MachineMaintenance';
import {PersonalPage}from '../modules/Personal/PersonalPage';
import {PaymentSlip} from '../modules/Personal/PaymentSlip';
import {TransactionPage}from '../modules/Transaction/TransactionPage';
import {Kardex}from '../modules/Transaction/Reportes/Kardex';

const AppRouter = () => (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Rutas privadas */}            
            <Route path="/dashboard/*" element={<PrivateRoute component={DashboardPage} />} />
            <Route path="/profile/*" element={<PrivateRoute component={ProfilePage} />} />
            <Route path="Logistica/Productos/*" element={<PrivateRoute component={ProductPage} />} />
            <Route path="Equipos/Equipos/*"   element={<PrivateRoute component={MachinePage}/>}/>
            <Route path="Equipos//MantenimientoEquipo/*" element={<PrivateRoute component={MachineMaintenance}/>}/>
            <Route path="RRHH/Personal/*" element={<PrivateRoute component={PersonalPage}/>}/>
            <Route path="RRHH/Salarios/*" element={<PrivateRoute component={PaymentSlip}/>}/>
            <Route path="Logistica/Transaccion/*" element={<PrivateRoute component={TransactionPage}/>}/>
            <Route path="Logistica/Kardex/*" element={<PrivateRoute component={Kardex} />} />
            {/* Ruta por defecto para 404 */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
);

export default AppRouter;