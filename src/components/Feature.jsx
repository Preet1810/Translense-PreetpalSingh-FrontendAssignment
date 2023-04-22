import React from 'react'
import { causes } from "../constants"
const Feature=() => {
    return (
        <div id="our-cause" className='px-32 py-10'>
            <h2 className='text-center text-4xl font-bold font-manrope p-16'>Our Continued Project
                <br />
                Assistance Programs
            </h2>
            <div className="flex flex-wrap">
                {causes.map(cause => (
                    <div className="p-4 w-1/3" key={cause.title}>
                        <div className="p-4">
                            <img src={cause.img} alt={cause.title} className="mb-6" />
                            <h3 className="text-2xl text-mainBlack font-bold font-manrope mb-4">{cause.title}</h3>
                            <p className="text-mainGrey font-medium font-manrope">{cause.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feature