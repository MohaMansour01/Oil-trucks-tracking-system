import React from "react";
import logo from "../assets/logo.png";

// Use forwardRef so parent can attach a ref
const Footer = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full h-[200px] bg-gray-800 flex flex-col justify-center items-center text-center gap-2"
    >
      <img
        src={logo}
        alt="Logo"
        className="h-[120px] w-[120px] cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <h1
        className="text-white font-bold text-[20px]"
        style={{ textShadow: "4px 4px 9px rgba(0,0,0,0.9)" }}
      >
        All Rights Reserved By DynaSoft &copy; 2025
      </h1>
    </section>
  );
});

export default Footer;
