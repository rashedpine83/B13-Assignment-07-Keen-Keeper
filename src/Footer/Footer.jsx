import React from 'react';
import footerLogo from '../assets/logo-xl.png';
import instagran from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twiter from '../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] mt-20'>
            <div className='space-y-4'>
                <img src={footerLogo} alt='footer logo' className='mx-auto pt-20'/>
                <p className='text-white text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h3 className='text-xl font-medium text-white text-center'>Social Links</h3>
            </div>
            <div className='flex justify-center items-center gap-4 mt-4 mb-7'>
                <img src={instagran} alt="instagram image" />
                <img src={facebook} alt="facebook image" />
                <img src={twiter} alt="twiter image" />
            </div>

            <div className='border-t border-gray-600  py-6'></div>
            
            <div className='flex justify-between text-white pb-8 max-w-6xl mx-auto'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex justify-between gap-3'>
                    <p>Privacy Policy  </p>
                    <p>Terms of Service</p>
                     <p> Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;