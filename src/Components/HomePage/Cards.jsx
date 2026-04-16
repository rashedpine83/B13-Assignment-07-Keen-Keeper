import React from 'react';

const Cards = () => {
    return (
        <div className='px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto'>
                
                <div className='shadow-lg text-center p-6 md:p-8 lg:p-10 rounded-xl'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-[#244D3F]'>10</h3>
                    <p className='text-sm md:text-[18px] text-[#64748B]'>Total Friends</p>
                </div>

                <div className='shadow-lg text-center p-6 md:p-8 lg:p-10 rounded-xl'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-[#244D3F]'>3</h3>
                    <p className='text-sm md:text-[18px] text-[#64748B]'>On Track</p>
                </div>

                <div className='shadow-lg text-center p-6 md:p-8 lg:p-10 rounded-xl'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-[#244D3F]'>6</h3>
                    <p className='text-sm md:text-[18px] text-[#64748B]'>Need Attention</p>
                </div>

                <div className='shadow-lg text-center p-6 md:p-8 lg:p-10 rounded-xl'>
                    <h3 className='text-2xl md:text-3xl font-semibold text-[#244D3F]'>12</h3>
                    <p className='text-sm md:text-[18px] text-[#64748B]'>Interactions This Month</p>
                </div>

            </div>
        </div>
    );
};

export default Cards;