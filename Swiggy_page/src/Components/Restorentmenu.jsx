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


    return (
        <div className="flex flex-col items-center">

            {menudata && <div className="w-[760px] mt-4">

                <h1 className="text-2xl font-bold">{menudata.data.cards[0]?.card?.card?.text}</h1>

                <div className="flex flex-row flex-wrap gap-10 mt-5">

                    <p className="font-semibold text-lg cursor-pointer">{menudata.data.cards[1]?.card?.card?.tabs[0]?.title}</p>

                    <p className="font-semibold text-lg cursor-pointer">{menudata.data.cards[1]?.card?.card?.tabs[1]?.title}</p>

                </div>
                <hr className="text-black h-1 font-bold mt-3" />

                <div className="rounded-b-[50px] px-6 pb-6  mt-5 bg-slate-100">
                    <div className="flex flex-col flex-wrap gap-2 border bg-white rounded-3xl p-5 w-full pb-5">
                        <div className="flex flex-row flex-wrap gap-1 font-bold">
                            <p>⭐ {menudata.data.cards[2]?.card?.card?.info?.avgRating}</p>
                            <p> ({menudata.data.cards[2]?.card?.card?.info?.totalRatingsString})</p>
                            <p className="ml-10">{menudata.data.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-orange-500 ml-2 text-sm">
                            <p>{menudata.data.cards[2]?.card?.card?.info?.name}</p>
                            <p>{menudata.data.cards[2]?.card?.card?.info?.city}</p>
                        </div>
                        <div className="flex flex-row items-center flex-wrap gap-3 ml-2">

                            <div className="flex flex-col gap-0.5 text-center">
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                <div className="w-0.5 h-8 rounded-full self-center bg-gray-300"></div>
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            </div>

                            <div className="flex flex-col flex-wrap gap-4  text-sm font-bold">
                                <p>Outlet</p>
                                <p>{menudata.data.cards[2]?.card?.card?.info?.sla?.slaString}</p>
                            </div>

                            <div className="flex flex-col -mt-11 ml-3">
                                <p>{menudata.data.cards[2]?.card?.card?.info?.locality}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="py-1 rounded-md mt-10 text-center bg-gray-200 leading-loose">~-MENU-~</div>

                <div className="flex flex-col mt-10">
                    <h1 className="text-xl font-semibold">Recomended</h1>

                    {menudata.data.cards[5]?.groupedCard.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards.map((item, index) => (
                        <div key={item.card.info.id} className="flex flex-col">
                            <div className="flex flex-row justify-between mt-10">
                                <div className="flex-flex-col gap-5 pt-4 pr-4">
                                    <h2 className="font-bold text-base">{item?.card?.info?.name}</h2>
                                    <p className="font-semibold mt-0.5">₹{item?.card?.info?.price / 100}</p>
                                    <p className="mt-2">⭐ {item?.card?.info?.ratings.aggregatedRating.rating}({item?.card?.info?.ratings.aggregatedRating.ratingCountV2})</p>
                                    <p className="text-gray-500 mt-3">{item?.card?.info?.description}</p>
                                </div>

                                <div className="relative">
                                    <div className="w-40 rounded-xl">
                                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`} alt={`${item?.card?.info?.name}`} className="w-fit object-cover rounded-xl" />
                                    </div>
                                    <button className="absolute -bottom-5 bg-white  py-2 px-8 left-1/2 transform -translate-x-12  border rounded-lg text-green-500 font-bold">
                                        ADD
                                    </button>
                                </div>
                            </div>
                            <hr className="text-black mt-10 h-0.5 bg-black/60" />
                        </div>
                    ))}
                </div>

            </div>}
        </div>
    )
}
