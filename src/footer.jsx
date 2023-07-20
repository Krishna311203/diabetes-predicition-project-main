import React from "react";
import heroImg from "./assets/hero.png";

const Footer = () => {
  return (
    <>
      <div
        className="mt-[100px] text-center p-4 relative z-20"
        style={{ backgroundColor: "#3F2305", color: "white" }}
      >
        © 2021 :
        <a
          className="text-reset fw-bold "
          style={{ color: "white" }}
          href="https://www.goondir.org.au/"
        >
          Goondir Health Services
        </a>
      </div>
    </>
  );
};

export default Footer;
