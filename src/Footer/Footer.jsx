import React from 'react';
import footerLogo from '../assets/logo-xl.png';
import instagran from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twiter from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className='bg-[#244D3F] mt-20 px-4'>

      <div className='space-y-4 text-center'>
        <img 
          src={footerLogo} 
          alt='footer logo' 
          className='mx-auto pt-12 w-32 md:w-40 lg:w-48'
        />

        <p className='text-white text-sm md:text-base max-w-xl mx-auto'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className='text-lg md:text-xl font-medium text-white'>
          Social Links
        </h3>
      </div>

      <div className='flex justify-center items-center gap-4 mt-4 mb-8'>
        <img src={instagran} alt="instagram" className='w-6 md:w-8 cursor-pointer'/>
        <img src={facebook} alt="facebook" className='w-6 md:w-8 cursor-pointer'/>
        <img src={twiter} alt="twitter" className='w-6 md:w-8 cursor-pointer'/>
      </div>

      
      <div className='border-t border-gray-600 py-4'></div>

      
      <div className='flex flex-col md:flex-row items-center justify-between text-white pb-8 max-w-6xl mx-auto gap-4 text-center md:text-left'>
        
        <p className='text-sm md:text-base'>
          © 2026 KeenKeeper. All rights reserved.
        </p>

        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm md:text-base'>
          <p className='cursor-pointer hover:underline'>Privacy Policy</p>
          <p className='cursor-pointer hover:underline'>Terms of Service</p>
          <p className='cursor-pointer hover:underline'>Cookies</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;