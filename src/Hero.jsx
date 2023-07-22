import React from "react";
import heroImg from "./assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] flex items-center justify-center  w-screen h-[100vh] hero-back-bg">

      <div className="flex items-center justify-center">
        <img
          src={heroImg}
          className=" relative z-10 w-full sm:w-[70vw] md:w-[50vw] lg:h-[80vh]  lg:w-[50vw]  inner-hero-bg"
          alt=""
        />
      </div>
      </div>
    </>
  );
};

export default Hero;
