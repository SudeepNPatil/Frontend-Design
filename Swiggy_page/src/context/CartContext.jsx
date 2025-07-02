import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItem, setCartItem] = useState([])

    function addToCart(item) {
        setCartItem((previtem) => [...previtem, item])
    }

    function removeFromCart(id) {
        setCartItem((prev) => prev.filter((item) => item?.card?.info?.id != id))
    }

    return (
        <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

console.log("contextpage is rendered")
export default CartContext;