import React from "react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Botao from "./botao.jsx";

const Work = () => {
  return (
    <div id="Work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Meu Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">Projetos recentes</h2>
      <p className="text-center max-w-2xl mx-auto mt-10 mb-10 font-ovo">
        Veja algum dos meus projetos recentes abaixo. Clique em qualquer um
        deles para saber mais detalhes.
      </p>
      <div className="grid grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className=" flex aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
                    cursor-pointer group flex-col items-center gap-4
                    hover:scale-105 transition-transform duration-300 
                    border-2 border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500"
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
      <Botao />
    </div>
  );
};

export default Work;
