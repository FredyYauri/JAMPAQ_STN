import React, { useState } from 'react';
import LeftSidebar from './Layout/LeftSidebar';
import TopNavbar from './Layout/TopNavbar/index';
import Footer from './Layout/Footer';

const Layout = ({ children }) => {
    const [active, setActive] = useState(false);
    const toogleActive = () => {
        setActive(!active);
    };
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
