import React from 'react';
import { card1, card2, card3 } from '../assets';

const Cards=() => {
    return (
        <div className="flex flex-wrap justify-center py-10 px-20 ">
            <div className="flex p-4 relative">
                <img className="w-full object-cover" src={card1} alt="Air Pollution" />
                <div className='absolute ml-4 py-16 bottom-0'>
                    <p className='text-dimWhite  font-manrope font-medium text-xs uppercase tracking-widest mb-3'>Air Pollution</p>
                    <p className='font-manrope font-medium text-mainWhite text-xl'>What’s currently happening
                        <br />
                        in Air Pollution all around the
                        <br />
                        world? AQI region-wise.</p>
                </div>
            </div>
            <div className="flex p-4 relative">
                <img className="w-full object-cover" src={card2} alt="Water Pollution" />
                <div className='absolute ml-4 py-10'>
                    <p className='text-dimWhite font-manrope font-medium text-xs uppercase tracking-widest mb-3'>WATER POLLUTANT</p>
                    <p className='font-manrope font-medium text-mainWhite text-xl'>
                        Think up spending hours
                        <br />
                        every day looking for drinking water.
                    </p>
                    <p className='font-manrope font-normal mt-6 text-mainWhite'>
                        Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.
                    </p>
                    <div className="flex justify-end mt-20">
                        <span className='text-dimGreen text-sm font-semibold font-manrope px-28'>67%</span>
                    </div>
                    <div className="w-72 bg-transparent rounded-md h-1.8 mb-4 dark:bg-transparent border border-dimGreen">
                        <div className="h-1 p-1 rounded-sm dark:bg-dimGreen" style={{ width: '67%' }}></div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-mainWhite font-manrope text-xs font-semibold'>Raised : $10.11 million</p>
                        <p className='text-mainWhite font-manrope text-xs font-semibold mr-8'>Goal: $23 million</p>
                    </div>
                    <div className='flex justify-center p-6 mr-8'>
                        <button className="bg-transparent text-white font-medium py-4 px-14 rounded border border-white hover:bg-dimWhite hover:text-mainGreen transition-all duration-300">
                            Donate
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex p-4 relative">
                <img className="w-full object-cover" src={card3} alt="Air Pollution" />
                <div className='absolute ml-4 py-16 bottom-0'>
                    <p className='text-dimWhite  font-manrope font-medium text-xs uppercase tracking-widest mb-3'>MELTING ICEBERGS</p>
                    <p className='font-manrope font-medium text-mainWhite text-xl'>
                        Negative mass balances due
                        <br />
                        to retiring glaciers is causing
                        <br />
                        them to disappear.</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;


{/* <div class="flex justify-end">
<span className='text-dimGreen text-sm font-semibold font-manrope px-28'>67%</span>
</div>
<div class="w-72 bg-transparent rounded-md h-1.8 mb-4 dark:bg-transparent border border-dimGreen">
<div class="h-1 p-1 rounded-sm dark:bg-dimGreen" style={{ width: '67%' }}></div>
</div>
<div className='flex justify-between'>
<p className='text-mainWhite font-manrope text-xs font-semibold'>Raised : $10.11 million</p>
<p className='text-mainWhite font-manrope text-xs font-semibold mr-8'>Goal: $23 million</p>

</div>
<button className="bg-transparent text-white font-medium py-4 px-7 rounded border border-white hover:bg-dimWhite hover:text-mainGreen transition-all duration-300">
Contact Us
</button> */}
