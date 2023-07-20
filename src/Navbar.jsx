import React from "react";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-50 t-0 bg-[#f2ead3] w-[100vw] h-[80px] flex py-4 items-center justify-center box-shadow-navbar  ">
        <img src={logo} className="w-[150px] h-[50px] " alt="Logo" />
      </div>
    </>
  );
};

export default Navbar;
