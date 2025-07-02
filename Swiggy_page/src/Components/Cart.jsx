import { useContext } from "react"
import CartContext from "../Context/CartContext"


export default function Cart() {

    const { cartItem, removeFromCart } = useContext(CartContext);

    return (
        <div className="pt-40">
            {
                cartItem.length == 0 ? <div className="text-center">Your Cart is empty</div> :

                    cartItem.map((item) => (
                        <div className="flex flex-row flex-wrap justify-between rounded-lg mb-14 bg-green-50 w-[50vw] mx-auto shadow-lg">
                            <div className="flex flex-col px-4 py-4">
                                <p className="text-lg font-semibold"> {item?.card?.info?.name}</p>
                                <p className="text-gray-700">₹ {item?.card?.info?.price / 100}</p>
                                <p>⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                            </div>
                            <div className="w-40 relative">
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`} alt={`${item?.card?.info?.name}`} className="w-fit object-cover rounded-lg" />
                                <button
                                    onClick={() => removeFromCart(item?.card?.info?.id)}
                                    className="absolute px-4 py-2 bg-white rounded-xl font-semibold left-1/2 -translate-x-10 -bottom-4">Remove</button>
                            </div>
                        </div>
                    ))

            }
        </div>
    )
}