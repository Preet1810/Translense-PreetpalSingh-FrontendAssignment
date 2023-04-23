import React from 'react'
import { vidpic } from "../assets"
const SignUp=() => {
    return (
        <div id="contact-us" className='flex flex-1 px-36 py-16'>
            <div className='flex-1'>
                <h2 className='text-mainBlack text-5xl font-bold font-manrope'>Sign Up For Environment News & Alerts</h2>
                <p className='text-mainGrey text-xl mt-8 font-manrope'>We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely.</p>
                <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-mainGreen dark:text-mainGreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="text" id="input-group-1" className="bg-transparent border border-mainGreen text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[500px] pl-12 p-2.5  dark:bg-transparent dark:border-mainGreen dark:placeholder-gray-400 dark:text-mainGrey dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email Address" />
                </div>
                <button className="bg-mainGreen mt-4 text-mainWhite font-medium font-manrope py-4 px-7 rounded mr-10 hover:bg-transparent hover:text-mainBlack hover:border border-mainBlack transition-all duration-300">
                    Donate Now
                </button>
            </div>
            <div className='flex-1 flex justify-center'> {/* Added flex and justify-center classes */}
                <img className='' src={vidpic} alt="video" />
            </div>
        </div>
    )
}

export default SignUp;
