import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";


export default function App() {

  console.log("app component is rendered")
  return (
    <>
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>

    </>
  )
}