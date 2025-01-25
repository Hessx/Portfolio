import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 mx-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Olá, eu sou Vitor Hesse <Image src={assets.hand_icon} alt="Hand icon" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Ux/Ui Designer E Web Developer
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">Description</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#About"
          className="px-10 text-white py-3 border bg-black rounded-full border-white flex items-center gap-2"
        >
          Contact
        </a>
        <Image src={assets.right_arrow_white} alt="Right arrow" />
        <a
          href="/curriculo"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Curriculo
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
