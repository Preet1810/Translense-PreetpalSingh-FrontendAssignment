import React from 'react'
import { hero } from '../assets'

const Hero=() => {
    return (

        <div id="home" className="flex h-screen">
            <img src={hero} alt="Hero Image" className="w-full h-full object-cover" />
            <div className="absolute ml-20 mt-20">
                <h3 className='text-mainWhite font-manrope font-bold text-5xl'>Help <span className='text-mainOrange'>Today</span> for</h3>
                <h2 className='text-mainWhite font-manrope font-bold text-8xl ml-20 mt-1'>Brighter <span className='text-dimGreen'>Tomorrow</span></h2>
                <p className='text-mainWhite text-2xl tracking-wide font-manrope font-normal mt-16'>
                    Leaders across the country are tackling the most challenging and pressing issues
                    <br />
                    of our time. Earth Let us all join to deal with unprecedented threats to Earth's life.
                </p>
                <div className='mt-14'>
                    <button className="bg-dimWhite text-mainGreen font-medium py-4 px-7 rounded mr-10 hover:bg-transparent hover:text-white hover:border border-white transition-all duration-300">
                        Donate Now
                    </button>
                    <button className="bg-transparent text-white font-medium py-4 px-7 rounded border border-white hover:bg-dimWhite hover:text-mainGreen transition-all duration-300">
                        Contact Us
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Hero