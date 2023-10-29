import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import SidebarContextProvider from "./Context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <SidebarContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SidebarContextProvider>

);
