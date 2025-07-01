import { SiSwiggy } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";


export default function Navbar() {

    const { itemCount, setitemCount } = useContext(CartContext);

    return (
        <div className="bg-gray-100 flex justify-between h-20 items-center z-50 px-28 fixed w-full ">


            <SiSwiggy size={40} className="text-orange-500 hover:scale-125 duration-700 cursor-pointer" />

            <div className="flex flex-row flex-wrap gap-20 font-semibold">
                <Link to={`/Home`}>Home</Link>

                <Link to={`/Restorents`}>Restorents</Link>

                <Link to={`/Contact`}>Contact</Link>

                <Link to={`/Cart`}>Cart {itemCount === null ? '' : <div className="relative bg-pink-700 px-2 -top-3 right-3 rounded-full text-white inline-block">{itemCount}</div>}</Link>
            </div>

        </div>
    )
}







/* 

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

*/