import React from "react";
import heroImg from "./assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="bg-[#f5f5f5] flex items-center justify-center  w-screen h-[100vh] hero-back-bg"></div>

      <div className="flex items-center justify-center">
        <img
          src={heroImg}
          className=" relative z-10 w-full sm:w-[70vw] md:w-[50vw] lg:h-[80vh]  lg:w-[50vw] mt-[-500px] sm:mt-[-570px] inner-hero-bg"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
