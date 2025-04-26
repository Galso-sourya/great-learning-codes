// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import LifecycleDemo from "./components/LifecycleDemo-function"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LifecycleDemo/>
    </React.StrictMode>
);