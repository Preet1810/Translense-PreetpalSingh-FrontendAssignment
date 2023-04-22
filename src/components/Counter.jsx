import React from 'react'
import { counter } from '../constants'

const Counter=() => {
    return (
        <div className="bg-mainWhite px-44">
            <div className="flex flex-wrap justify-center items-center">
                {counter.map(cause => (
                    <div className="p-10 w-1/4" key={cause.title}>
                        <div className="p-4">
                            <div className="flex justify-center">
                                <img src={cause.img} alt={cause.title} className="mb-3" />
                            </div>
                            <h2 className='text-6xl text-mainGreen font-bold font-manrope text-center mb-4'>{cause.number}</h2>
                            <h3 className="text-xl text-mainBlack font-bold font-manrope mb-4 text-center">{cause.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Counter
