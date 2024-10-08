import React, { useEffect, useState } from 'react';
import LeftSidebar from './Layout/LeftSidebar';
import TopNavbar from './Layout/TopNavbar/index';
import Footer from './Layout/Footer';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    const toogleActive = () => {
        setActive(!active);
    };
    useEffect(() => {
        console.log('Layout token', sessionStorage.getItem('token'));
        if (!sessionStorage.getItem('token'))
            navigate('/login');
    }, [sessionStorage.getItem('token')]);
    return (
        <div className={`main-wrapper-content ${active && "active"}`}>
            <LeftSidebar toogleActive={toogleActive} />
            <TopNavbar toogleActive={toogleActive} />            
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
