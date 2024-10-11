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
        if (!sessionStorage.getItem('token'))
            navigate('/login');
    }, [sessionStorage.getItem('token')]);
    return (
        <div className={`main-wrapper-content ${active && "active"}`}>
            <div className='main-content d-flex flex-column'>
                <LeftSidebar toogleActive={toogleActive} />
                <TopNavbar toogleActive={toogleActive} />
                    {children}
                {/* <div className="main-content d-flex flex-column">
                </div> */}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
