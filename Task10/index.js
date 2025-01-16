import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import "./style.css";

const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);
root.render(<App />)