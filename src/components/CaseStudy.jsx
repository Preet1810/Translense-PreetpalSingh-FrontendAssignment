import React, { useState } from 'react';
import { caseStudy } from '../constants';
import { AiOutlineRightCircle, AiOutlineLeftCircle } from 'react-icons/ai';
const CaseStudy=() => {
    const [currentIndex, setCurrentIndex]=useState(0);

    const handlePrev=() => {
        setCurrentIndex((prevIndex) => (prevIndex===0? caseStudy.length-1:prevIndex-1));
    };

    const handleNext=() => {
        setCurrentIndex((prevIndex) => (prevIndex===caseStudy.length-1? 0:prevIndex+1));
    };

    return (
        <div id="cases" className="py-16 px-44">
            <h2 className="relative underline decoration-2 underline-offset-8 decoration-double decoration-dimGreen text-mainBlack font-medium font-manrope text-5xl flex justify-center">
                Case Study
            </h2>
            <div className="mt-12 flex justify-center">
                <div className="w-full bg-white shadow-md">
                    <div className="flex flex-col md:flex-row ">
                        <img src={caseStudy[currentIndex].img} alt="Case Study" className="object-cover" />
                        <div className="bg-mainGreen p-14">
                            <h3 className="text-dimGreen  font-manrope font-medium text-xs uppercase tracking-widest mb-5">{caseStudy[currentIndex].head1}</h3>
                            <div className='flex flex-1'>
                                <h4 className="flex-1 font-manrope font-medium text-mainWhite text-xl">{caseStudy[currentIndex].head2}</h4>
                                <button className="flex-1 py-4 px-7 bg-dimWhite text-mainGreen font-medium max-w-[200px] rounded hover:bg-transparent hover:text-white hover:border border-white transition-all duration-300">
                                    Donate
                                </button>
                            </div>
                            <p className="font-manrope font-normal mt-6 text-mainWhite tracking-widest">{caseStudy[currentIndex].description}</p>
                            <div className="flex justify-end mt-4">
                                <span className='text-dimGreen text-sm font-semibold font-manrope mr-56'>67%</span>
                            </div>
                            <div className="w-92 bg-transparent rounded-md h-1.8 mb-4 dark:bg-transparent border border-dimGreen">
                                <div className="h-1 p-1 rounded-sm dark:bg-dimGreen" style={{ width: '67%' }}></div>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-mainWhite font-manrope text-xs font-semibold'>Raised : $10.11 million</p>
                                <p className='text-mainWhite font-manrope text-xs font-semibold mr-8'>Goal: $23 million</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-1">
                <AiOutlineLeftCircle
                    onClick={handlePrev}
                    className="text-mainGreen text-5xl hover:text-dimGreenDark cursor-pointer transition duration-300"
                />
                <AiOutlineRightCircle
                    onClick={handleNext}
                    className="text-mainGreen text-5xl hover:text-dimGreenDark cursor-pointer ml-4 transition duration-300"
                />
            </div>
        </div>
    );
};

export default CaseStudy;
