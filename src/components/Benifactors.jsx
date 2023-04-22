import React from 'react';
import { benefactors } from "../constants";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Benefactors=() => {

    const handleMouseEnter=(index) => {
        document.getElementById(`social-icons-${index}`).style.opacity=1;
        document.getElementById(`benefactor-img-${index}`).style.filter='brightness(60%)';
    }

    const handleMouseLeave=(index) => {
        document.getElementById(`social-icons-${index}`).style.opacity=0;
        document.getElementById(`benefactor-img-${index}`).style.filter='brightness(100%)';
    }

    return (
        <div id="our-benefactors" className='py-16 px-20'>
            <h2 className='relative underline decoration-2 underline-offset-8 decoration-double decoration-dimGreen text-mainBlack font-medium font-manrope text-5xl flex justify-center'>
                Our Benefactors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                {benefactors.map((benefactor, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center group"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <img
                            id={`benefactor-img-${index}`}
                            className="h-auto max-w-full rounded-lg mb-4 transition-filter duration-200 ease-in-out group-hover:brightness-70"
                            src={benefactor.img}
                            alt={benefactor.name}
                        />
                        <div
                            id={`social-icons-${index}`}
                            className="absolute flex flex-1 mb-14 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
                        >
                            <a href={benefactor.instagram} target="_blank" rel="noopener noreferrer" className="mr-5">
                                <FaInstagram className="text-mainWhite text-3xl hover:cursor-pointer hover:scale-110 transition duration-300" />
                            </a>
                            <a href={benefactor.twitter} target="_blank" rel="noopener noreferrer" className="mr-5">
                                <FaTwitter className="text-mainWhite text-3xl hover:cursor-pointer hover:scale-110 transition duration-300" />
                            </a>
                            <a href={benefactor.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-mainWhite text-3xl hover:cursor-pointer hover:scale-110 transition duration-300" />
                            </a>
                        </div>
                        <div className="text-center">
                            <p className="text-mainBlack font-medium font-manrope mt-2">{benefactor.name}</p>
                            <p className="text-mainGrey font-manrope mt-1">{benefactor.work}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Benefactors;
