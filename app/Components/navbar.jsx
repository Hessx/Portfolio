import React, { useRef } from "react"; // Import useRef here
import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = () => {
  const SideMenuRef = useRef();

  const Openmenu = () => {
    SideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closemenu = () => {
    SideMenuRef.current.style.transform = "translateX(16rem)";
  };

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
            <a className="font-ovo" href="#Work">
              My work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={Openmenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        <ul
          ref={SideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition durantion-500 "
        >
          <div className="absolute top-5 right-5 " onClick={closemenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
              onClick={closemenu}
            />
          </div>

          <li>
            <a className="font-ovo" href="#top" onClick={closemenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#About" onClick={closemenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#Services" onClick={closemenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work" onClick={closemenu}>
              My work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#Contact" onClick={closemenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
