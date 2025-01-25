import React from "react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Meu Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">Projetos recentes</h2>
      <p className="text-center max-w-2xl mx-auto mt-10 mb-10 font-ovo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      </p>

      <div className="grid grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="flex aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
                    cursor-pointer group flex-col items-center gap-4
                    hover:scale-105 transition-transform duration-300"
          >
            <div
              className=" w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2  p-4 flex items-center justify-center
                    cursor-pointer bg-lightHover
                    hover:-translate-y-1 duration-200 "
            >
              <div>
                <h2
                  className="text-center text-2xl font-ovo
                            "
                >
                  {project.title}
                </h2>
                <p
                  className="text-center text-1xl font-ovo
                            "
                >
                  {project.description}
                </p>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-5 mx-auto my-20
                hover:bg-gray-700 hover:text-white
                hover:-translate-y-1 duration-200"
      >
        Show more
      </a>
    </div>
  );
};

export default Work;
