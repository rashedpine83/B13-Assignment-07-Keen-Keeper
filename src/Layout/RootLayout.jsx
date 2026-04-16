import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

            {/* toast container */}
             <ToastContainer />
        </div>
    );
};

export default RootLayout;