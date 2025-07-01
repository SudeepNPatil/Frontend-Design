import { useContext } from "react"
import CartContext from "../Context/CartContext"


export default function Cart() {

    const { Cartitem, setCartitem } = useContext(CartContext);

    return (
        <div className="pt-32">
            {
                Cartitem === null ? <div className="text-center">Your Cart is empty</div> :

                    <div className="text-center">
                        {Cartitem?.card?.info?.name}
                    </div>
            }
        </div>
    )
}