import React from "react";
import { useState } from "react";
import { useEffect } from "react";





export default function () {

  const [userdata, setdata] = useState([])

  useEffect(() => {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((data) => data.json())
      .then((data) => {

        let array = data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;

        console.log(array)
        console.log(array[0].info.cloudinaryImageId)
        setdata(array)
      })
  }, [])

  return (

    <div className="flex w-52 flex-wrap">
      {userdata.map((item, index) => (
        <div key={index} className="flex flex-col">

          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.info.cloudinaryImageId}`} />
          <h1>{item.info.name}</h1>
          <p>{item.info.avgRating}</p>
          <p>recipe</p>
          <p>area</p>

        </div>
      ))
      }
    </div>



  )
}