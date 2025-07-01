import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import CartContext from "./Context/CartContext";
import { useState } from "react";


export default function App() {

  const [Cartitem, setCartitem] = useState(null)

  const [itemCount, setitemCount] = useState(null)

  return (
    <>
      <CartContext.Provider value={{ Cartitem, setCartitem, itemCount, setitemCount }}>
        <Navbar />
        <Outlet />
      </CartContext.Provider>
    </>
  )
}