import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children, className}) => {
    return (
        
            <NavLink to={to} className={({isActive}) => `font-semibold pb-2 ${className} ${isActive ? "text-white bg-[#244D3F] " : "" }`}>
            {children}
            </NavLink>
        
    );
};

export default MyNavLink;