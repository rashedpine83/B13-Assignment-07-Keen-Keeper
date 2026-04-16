import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { PiChartLineBold } from 'react-icons/pi';
import { RiTimeLine } from 'react-icons/ri';

import navImage from '../../assets/logo.png';
import MyNavLink from './NavLinks';
import { Link } from 'react-router';

const NavBar = () => {

    const link = <>
        <li className='font-semibold'>
            <MyNavLink to='/' className='flex items-center gap-2'>
                <AiOutlineHome /> Home
            </MyNavLink>
        </li>

        <li className='font-semibold'>
            <MyNavLink to='/timeline' className='flex items-center gap-2'>
                <RiTimeLine /> Timeline
            </MyNavLink>
        </li>

        <li className='font-semibold'>
            <MyNavLink to='/status' className='flex items-center gap-2'>
                <PiChartLineBold /> Stats
            </MyNavLink>
        </li>
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm justify-between">

            {/* LEFT */}
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>

                <Link to='/'>
                    <img src={navImage} alt="Navbar logo" />
                </Link>
            </div>

            {/* CENTER */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;