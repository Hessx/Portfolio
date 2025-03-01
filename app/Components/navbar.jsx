import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white shadow-md">
        <a href="#top">
          <Image
            src={assets.logo2}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 bg-white ">
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#About">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
