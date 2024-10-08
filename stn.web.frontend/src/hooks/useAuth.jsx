// src/hooks/useAuth.js
import { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCatchFetch } from '../hooks/useCatchFetch';
import { sendValidarCredenciales } from '../services/Services';
import { useStnStore } from '../stores/useStateStore';

const AuthContext = createContext();
const { SendFetch } = useCatchFetch();
// Proveedor de autenticación para usar en toda la app
export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// Hook para acceder al contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext);
};

const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);  // Nuevo estado de carga
    const navigate = useNavigate();
    const { setModalConfirm, setToken, logoutAndRedirect } = useStnStore();
    const { setLoading } = useStnStore();

    useEffect(() => {
        // Simulación de carga del usuario (ejemplo: obtener del sessionStorage o API)
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoad(false);  // Finaliza la carga tras verificar el usuario
    }, []);

    const login = (username, password) => {
        setLoading(true);
        SendFetch(sendValidarCredenciales(username, password, 1))
            .then((data) => {
                console.log('data', data);
                
                if (data.status == 0) {
                    const dataResult = data.data[0];
                    setUser(dataResult);
                    sessionStorage.setItem('user', JSON.stringify(dataResult));
                    setToken(data.token);
                    setLoading(false);
                    navigate('/dashboard');
                }
                else {
                    //TODO: Implementar un mensaje de error con un ojeto en el 
                    //estado para que muestre un poput
                    console.log('false');
                    setLoading(true);
                    setModalConfirm({
                        isOpen: true,
                        title: 'Error',
                        body: 'Usuario o contraseña incorrectos',
                    });
                }
            }).catch((error) => {
                console.log('false');
                console.error('Error en login:', error);
            });


    };

    const logout = () => {
        setUser(null);
        logoutAndRedirect();
        navigate('/login');
    };

    const isAuthenticated = () => !!user;

    return {
        user,
        loading: load,
        login,
        logout,
        isAuthenticated,
    };
};
