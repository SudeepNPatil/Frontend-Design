import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Restorentmenu() {

    const params = useParams();

    const [menudata, setmenudata] = useState(null);


    useEffect(() => {

        fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=${params.id}&submitAction=ENTER`)
            .then(data => data.json())
            .then(data => setmenudata(data))
    }, [])

    console.log(menudata)
    return (
        <div className="flex flex-col items-center border">

            {menudata && <div className="border w-[760px]">

                <h1 className="text-xl font-bold">{menudata.data.cards[0]?.card?.card?.text}</h1>

                <div className="flex flex-row flex-wrap gap-10 mt-5">

                    <p className="font-semibold">{menudata.data.cards[1]?.card?.card?.tabs[1]?.title}</p>

                    <p className="font-semibold"></p>

                </div>
                <hr className="text-black h-1 font-bold mt-4" />


                <div className="flex flex-wrap gap-2 rounded-3xl w-full py-10">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>


            </div>}
        </div>
    )
}




/* 
({menudata.data.cards[2]?.card?.card?.info?.totalRatingsString})

{menudata.data.cards[2]?.card?.card?.info?.costForTwoMessage}

{menudata.data.cards[1]?.card?.card?.tabs[0]?.title || []}

{menudata.data.cards[0]?.card?.card?.text || []}

{menudata.data.cards[1]?.card?.card?.tabs[1]?.title || {}} */