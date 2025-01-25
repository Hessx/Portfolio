import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <div id="About" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex flex-col items-center lg:flex-row gap-20 my-20">
        <div className="w-64 sm:w-96 h-64 sm:h-96 relative rouded-3xl">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">paragrafo</p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 
                cursor-pointer hover:bg-blue-100 hover:translate-y-1 duration-200 hover:shadow-black"
                key={index}
              >
                <Image className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700w">{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo font-semibold">
            Ferramentas que eu utilizo
          </h4>
          <ul className="flex items-center gap-4 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer bg-lightHover p-2 
                hover:-translate-y-1 duration-200 "
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
