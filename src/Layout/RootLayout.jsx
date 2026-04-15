import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;