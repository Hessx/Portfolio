import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 mx-w-3x1 text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2x1 mb-3 font-ovo">
        Olá, eu sou Vitor Hesse <Image src={assets.hand_icon} alt="Hand icon" />
      </h3>
      <h1 className="text-3xl sm:text-6x1 lg:text-[66px] font-ovo">
        Ux/Ui Designer E Web Developer
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">Description</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#Contact">Contact</a>
        <Image
          src={assets.right_arrow_white}
          alt="Right arrow"
          className="px-10 py-3 border bg-black rounded-full border-white flex items-center gap-2 w-4"
        />
        <a
          href="/curriculo"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Curriculo
        </a>
        <Image src={assets.download_icon} alt="Download icon" className="w-4" />
      </div>
    </div>
  );
};

export default Header;
