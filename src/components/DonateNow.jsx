import React from 'react'
import { donate } from '../assets'

const DonateNow=() => {
    return (
        <div className='flex px-40'>
            <div className='flex-1'>
                <img src={donate} alt="girlonboat" />
            </div>
            <div className='flex-1 flex flex-col justify-center'>
                <h1 className='text-mainBlack text-5xl font-medium font-manrope'>Take Action. Let’s Get In Touch</h1>
                <p className='text-mainGrey text-xl mt-8 font-manrope'>
                    Given the limited resources, the issues we address,
                    <br />
                    from hunger & clean drinking water to disease
                    <br />
                    prevention and homelessness, can be taxing.
                </p>
                <div className='mt-8'>
                    <button className="bg-mainGreen text-mainWhite font-medium font-manrope py-4 px-7 rounded mr-10 hover:bg-transparent hover:text-mainBlack hover:border border-mainBlack transition-all duration-300">
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DonateNow
