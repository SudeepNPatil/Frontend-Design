import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgOptions } from "react-icons/cg";

export default function Navbar() {
    return (
        <div className="bg-gray-100 flex justify-center gap-2 h-20 items-center mb-6">

            <button className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">Filter <CgOptions className="inline-block" /></button>

            <select name="some" id="some" className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">
                <option value="sortby">Sort by</option>
                <option value="some">some</option>
                <option value="Some">Some</option>
            </select>

            <button className="text-center cursor-pointer  rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">Offers</button>

            <button className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">Fast Delivary</button>

            <button className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">New on Swiggy</button>

            <button className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">Rating 4+</button>

            <button className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">Pure Veg</button>

            <button className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">Rs 300-Rs600</button>

            <button className="text-center cursor-pointer rounded-3xl w-fit h-max p-1 pl-3 pr-3 bg-white border shadow">Less than Rs. 300</button>

            <div className="bg-gray-200 rounded-lg flex border items-center">
                <input type="text" placeholder="Search For Reastorant and food" className="pl-2 bg-gray-200 rounded-lg w-60 h-12" />
                <CiSearch size={20} className="m-2" />
            </div>

        </div>
    )
}