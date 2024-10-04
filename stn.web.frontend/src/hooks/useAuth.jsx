// src/hooks/useAuth.js
import { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCatchFetch } from '../hooks/useCatchFetch';
import { sendValidarCredenciales } from '../services/Servicesjsx';

const AuthContext = createContext();
const { SendFetch, setLoading } = useCatchFetch();
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

    useEffect(() => {
        // Simulación de carga del usuario (ejemplo: obtener del localStorage o API)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoad(false);  // Finaliza la carga tras verificar el usuario
    }, []);

    const login = (username, password) => {
        setLoading();
        SendFetch(sendValidarCredenciales(username, password, 1))
        .then((data)=> { 
        console.log('data', data);
            if (data.status == 0){
                const dataResult = data.data[0];
                setUser(dataResult);
                localStorage.setItem('user', JSON.stringify(dataResult));
                navigate('/dashboard');
            }
            else{
                //TODO: Implementar un mensaje de error con un ojeto en el estado para que muestre un poput
                return null;
            }
        });

        
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
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
