import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Restorents() {

    const [data, setdata] = useState([])

    useEffect(() => {

        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            .then((data) => data.json())
            .then((data) => {

                let restaurant = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

                console.log(restaurant)
                setdata(restaurant)
            })

    }, [])

    return (
        <>

            <div className="flex flex-wrap p-2 gap-10 justify-center py-28">
                {data.map((data, index) => (
                    <Link to={`/Restorentmenu/${data.info.id}`} key={index} className="w-60 hover:scale-95 hover:duration-300 hover:cursor-pointer rounded-3xl">

                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.info.cloudinaryImageId}`} alt={`${data.info.name}`} className="rounded-3xl w-full h-44" />

                        <div className="p-1 ml-1">
                            <h1 className="text-md font-semibold"> {data.info.name}</h1>

                            <p className="font-semibold"> ⭐ {data.info.avgRating} . {data.info.sla.slaString} </p>

                            <p className="truncate text-gray-500 font-semibold">{data.info.cuisines.join(', ')}</p>

                            <p className="text-gray-500 font-semibold">{data.info.areaName}</p>
                        </div>


                    </Link>
                ))}

            </div>

        </>
    )
}