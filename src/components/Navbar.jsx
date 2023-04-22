import React, { useState } from 'react'
import { logo } from "../assets"
import { ImFacebook, ImTwitter, ImLinkedin2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaRegHandPointer } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { TbArrowUpRight } from 'react-icons/tb';
import { navLinks } from "../constants";
// import { socialMedia } from '../constants';
export const socialMedia=[
    { icon: <ImFacebook />, color: '#FFA17A', link: 'https://www.facebook.com' },
    { icon: <ImTwitter />, color: '#FFA17A', link: 'https://twitter.com' },
    { icon: <ImLinkedin2 />, color: '#FFA17A', link: 'https://www.linkedin.com' },
    { icon: <BsInstagram />, color: '#FFA17A', link: 'https://www.instagram.com' }
];

const Navbar=() => {
    const [active, setActive]=useState("Home");
    return (
        <div>
            <nav className="bg-mainBlack flex justify-between">
                <div className="flex gap-8 ml-20">
                    {socialMedia.map(item => (
                        <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="text-mainOrange my-4 hover:scale-110 transition duration-300">
                                {item.icon}
                            </div>
                        </a>
                    ))}
                </div>
                <a href="https://www.facebook.com" target="_blank" className="flex items-center mr-20">
                    <FaRegHandPointer className="text-mainOrange my-4 hover:scale-110 transition duration-300" />
                    <p className='font-manrope font-normal text-mainWhite ml-3 hover:text-mainOrange transition duration-300'>
                        Join the fight, Become a Volunteer
                    </p>
                </a>
            </nav>

            <nav className='bg-mainGreen flex justify-between'>
                <img src={logo} alt="green Logo" className='flex my-5 ml-20' />
                <ul className="flex items-center">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-Manrope font-normal cursor-pointer text-[16px] ${active===nav.title? "text-dimGreen":"text-[#F3EADA]"
                                } ${index===navLinks.length-1? "mr-0":"mr-10"} hover:text-dimGreen`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>
                                <div className="flex items-center font-manrope"> {/* Wrap text and icon in a flex container */}
                                    <span className="mr-1">{nav.title}</span> {/* Add margin-right to create space between text and icon */}
                                    {active===nav.title&&(
                                        <TbArrowUpRight />
                                    )}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center'>
                    <FiSearch className="text-dimGreen text-2xl hover:scale-110 transition duration-300 cursor-pointer mr-10" />
                    <button className="bg-mainOrange hover:bg-orange-600 text-mainWhite font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out mr-20">
                        Help us Fight
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar