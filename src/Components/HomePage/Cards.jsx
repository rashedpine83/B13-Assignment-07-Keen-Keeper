import React from 'react';

const Cards = () => {
    return (
        <div>
           <div className='grid grid-cols-4 gap-5 max-w-6xl mx-auto place-content-center'>
            <div className='shadow-lg text-center p-10'>
                <h3 className='text-3xl font-semibold text-[#244D3F]'>10</h3>
                <p className='text-[18px] text-[#64748B]'>Total Friends</p>
            </div>
            <div className='shadow-lg text-center p-10'>
                <h3 className='text-3xl font-semibold text-[#244D3F]'>3</h3>
                <p className='text-[18px] text-[#64748B]'>On Track</p>
            </div>
            <div className='shadow-lg text-center p-10'>
                <h3 className='text-3xl font-semibold text-[#244D3F]'>6</h3>
                <p className='text-[18px] text-[#64748B]'>Need Attention</p>
            </div>
            <div className='shadow-lg text-center p-10'>
                <h3 className='text-3xl font-semibold text-[#244D3F]'>12</h3>
                <p className='text-[18px] text-[#64748B]'>Interactions This Month</p>
            </div>
           </div>
        </div>
    );
};

export default Cards;