import React, { useState } from "react";

export default function Crousal() {

    const [currpo, setcurrpo] = useState(0);

    const nextstep = function () {
        setcurrpo(currpo + 1);
    }

    const prevstep = function () {
        setcurrpo(currpo - 1);
    }


    return (
        <div className="mx-auto bg-gray-50 w-fit">

            <div className={`flex flex-row  w-[600px] overflow-hidden mx-auto my-20 relative transition-transform duration-700 scroll-smooth ease-in-out `}>

                <img src="https://plus.unsplash.com/premium_photo-1748106667753-dd4d5f35083e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="transition-transform h-full duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(${100 * currpo}%)` }} />

                <img src="https://plus.unsplash.com/premium_photo-1747932198012-8760c66b38b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="transition-transform duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(${100 * currpo}%)` }} />

                <img src="https://placehold.co/600x400" alt="img" className="transition-transform duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(${100 * currpo}%)` }} />

                <img src="https://placehold.co/600x400" alt="img" className="transition-transform duration-700 scroll-smooth ease-in-out" style={{ transform: `translateX(${100 * currpo}%)` }} />

                <svg onClick={nextstep} className="w-10 h-10 text-gray-800 absolute border right-0 top-1/2 transition-transform z-40 cursor-pointer -translate-y-6 rounded-full border-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>

                <svg onClick={prevstep} className="w-10 h-10 text-gray-800 absolute border left-2 top-1/2 transition-transform z-40 cursor-pointer -translate-y-6 rounded-full border-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                </svg>


            </div>

        </div>
    )
}