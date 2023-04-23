import React from 'react';
import { sponsors } from '../constants';

const Sponsors=() => {
    return (
        <div className='flex flex-1 px-20'>
            <div className='px-10 flex-1'>
                <h2 className='text-mainBlack text-5xl font-bold font-manrope'>The Environment is All We Have In Common</h2>
                <p className='text-mainGrey text-xl mt-8 font-manrope'>Turning the ship around takes a lot of
                    <br />
                    willpower and ingenuity.</p>
            </div>
            <div className='flex-1 grid grid-cols-2 md:grid-cols-3 gap-20'>
                {sponsors.map((benefactor, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center group"
                        style={{ borderRight: '1px solid #333', borderBottom: '1px solid #333', padding: '10px' }} // Updated border color to #333
                    >
                        <img
                            id={`benefactor-img-${index}`}
                            className="h-auto max-w-full rounded-lg mb-4 transition-all duration-200 ease-in-out group-hover:grayscale-0 grayscale cursor-pointer"
                            src={benefactor.img}
                            alt="IDK"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsors;