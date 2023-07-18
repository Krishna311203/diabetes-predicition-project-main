import React from "react";
import "./Preloader.css";
const Preloader = () => {
  return (
    <>
      <div className="text-center w-screen h-screen flex items-center justify-center bgkr">
        <div className="">
          <p className="font-bold  loading-animation">
            Diabetes Prediction Application
          </p>
        </div>
      </div>
    </>
  );
};

export default Preloader;
