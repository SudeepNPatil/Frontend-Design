import React, { useState } from "react";

export default function Crousal() {

    const [currpo, setcurrpo] = useState(0);

    const nextstep = function () {

        if (currpo < 3) {

            setcurrpo(currpo + 1);
        }

    }

    const prevstep = function () {

        if (currpo > 0) {
            setcurrpo(currpo - 1);
        }

    }


    return (
        <div className="mx-auto bg-gray-50 w-fit">

            <div className={`flex flex-row  w-[600px] overflow-hidden mx-auto my-20 relative transition-transform duration-700 scroll-smooth ease-in-out `}>

                <img src="https://placehold.co/600x400" alt="img" className="transition-transform h-full duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(-${100 * currpo}%)` }} />

                <img src="https://placehold.co/600x400" alt="img" className="transition-transform duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(-${100 * currpo}%)` }} />

                <img src="https://placehold.co/600x400" alt="img" className="transition-transform duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(-${100 * currpo}%)` }} />

                <img src="https://placehold.co/600x400" alt="img" className="transition-transform duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(-${100 * currpo}%)` }} />

                <svg onClick={nextstep} className={`w-10 h-10 ${currpo == 3 ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}  hover:bg-white text-gray-800 absolute border right-2 top-1/2 transition-transform z-40  -translate-y-6 rounded-full border-black dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>

                <svg onClick={prevstep} className={`w-10 h-10  ${currpo == 0 ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'} hover:bg-white text-gray-800 absolute border left-2 top-1/2 transition-transform z-40 cursor-pointer -translate-y-6 rounded-full border-black dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                </svg>

            </div>

        </div>
    )
}