import React from 'react'
import { socialMedia } from './Navbar'
import { navLinks } from "../constants";

const Footer=() => {
    return (
        <div className='bg-mainGreen px-32 py-12' >
            <div className='flex flex-1'>
                <h2 className='text-dimGreen font-manrope font-bold text-xl'>ENVIRONMENTAL</h2>
                <ul className="flex items-center justify-center px-44">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-Manrope font-normal cursor-pointer text-[16px] "text-dimGreen" ${index===navLinks.length-1? "mr-0":"mr-14"} hover:text-dimGreen`}
                        >
                            <a href={`#${nav.id}`}>
                                <div className="font-manrope text-mainWhite"> {/* Wrap text and icon in a flex container */}
                                    <span className="hover:text-dimGreen">{nav.title}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-8 mt-6">
                {socialMedia.map(item => (
                    <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="text-dimGreen hover:scale-110 transition duration-300">
                            {item.icon}
                        </div>
                    </a>
                ))}
            </div>
            <div>
                <p className="text-right text-dimWhite font-manrope">
                    4517 Washington Ave. Manchester,
                    <br />
                    Kentucky 39495
                    <br />
                    (505) 555-0125, (406) 555-0120
                    <br />
                    binhan628@gmail.com
                    <br />
                    manhhachkt08@gmail.com</p>
            </div>

            <div className='flex justify-center'>
                <h2 className='font-manrope text-mainWhite font-semibold text-xl mb-4'>Join our Cause, Become a Member</h2>
            </div>
            <div className='flex justify-center'>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-mainGreen dark:text-mainGreen" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="text" id="input-group-1" className="bg-[#115449] border border-mainGreen text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[400px] pl-12 p-2.5 dark:bg-[#115449] dark:border-mainGreen dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email Address" />
                </div>
                <button className="bg-mainOrange hover:bg-orange-600 text-mainWhite font-semibold py-1 px-14 rounded-md transition duration-300 ease-in-out">
                    Join
                </button>
            </div>

        </div>
    )
}

export default Footer;

