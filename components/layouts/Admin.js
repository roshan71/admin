import React from "react";

// components


import Sidebar from "../Sidebar.js";
import HeaderStats from "../Cards/HeaderStats";


export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
    
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
         
        </div>
      </div>
    </>
  );
}
