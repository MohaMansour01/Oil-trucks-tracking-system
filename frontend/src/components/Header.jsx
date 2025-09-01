import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import movingTruck from "../assets/truck-moving.png";
import whietMovingTruck from "../assets/white-truck-moving.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ scrollToSection, refs }) {
  const [open, setOpen] = useState(false);

  return (
    <section
      ref={refs.homeRef}
      className="bg-sky-800 flex h-[400px] flex-col overflow-visible"
    >
      <div className="flex items-start justify-between w-full p-9">
        {/* Logo */}
        <img
          src={logo}
          alt="Company_logo"
          className="w-[120px] h-[120px] mt-[-30px] opacity-0 animate-slide-in-left slide-delay-0 cursor-pointer"
          onClick={() => scrollToSection(refs.homeRef)}
        />

        <div className="flex justify-evenly w-[25%]">
          {/* Navigation */}
          <ul className="flex gap-8 items-center pr-3 text-white opacity-0 animate-slide-in-left slide-delay-1">
            <li
              className="hover:underline cursor-pointer"
              onClick={() => scrollToSection(refs.homeRef)}
            >
              Home
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => scrollToSection(refs.aboutRef)}
            >
              About
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => scrollToSection(refs.contactRef)}
            >
              Contact
            </li>
            <li
              className="hover:underline cursor-pointer"
              onClick={() => scrollToSection(refs.footerRef)}
            >
              Footer
            </li>
          </ul>

          {/* User Icon */}
          <div className="relative inline-block text-left opacity-0 animate-slide-in-left slide-delay-2">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-12 h-12 text-white bg-sky-700 rounded-full hover:bg-sky-600 transition"
            >
              <FaUserCircle size={20} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-slide-down">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      to={`/login`}
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 rounded-t-lg"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/signup`}
                      className="block px-4 py-2 text-gray-700 hover:bg-sky-100 rounded-b-lg"
                    >
                      Signup
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Header Quote */}
      <div className="w-full text-center mt-4 opacity-0 animate-slide-in-left slide-delay-3">
        <h2
          className="text-white text-[50px] font-bold"
          style={{ textShadow: "4px 4px 9px rgba(0,0,0,0.9)" }}
        >
          “Driven by Excellence, Powered by Trust.”
        </h2>

        <div className="flex items-center justify-center mt-4">
          <img
            src={movingTruck}
            alt="A moving Truck Image"
            className="h-[100px] w-[100px]"
          />
          <img
            src={whietMovingTruck}
            alt="A white moving Truck Image"
            className="h-[100px] w-[100px] m-9"
          />
        </div>
      </div>
    </section>
  );
}
