import React from "react";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="Services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">O que eu ofereço</h4>
      <h2 className="text-center text-5xl font-ovo">Meus serviços</h2>
      <p className="text-center max-w-4xl mx-auto mt-10 mb-10 font-ovo">
        Ofereço serviços de desenvolvimento front-end, criando interfaces
        modernas e responsivas com tecnologias como JavaScript, React e Tailwind
        CSS, sempre focadas na experiência do usuário. Também atuo no design
        UX/UI, desenvolvendo soluções intuitivas e funcionais alinhadas às
        melhores práticas para garantir usabilidade e navegação fluida. Além
        disso, tenho experiência em análise e otimização de estratégias digitais
        utilizando Google Analytics e Google Ads, com o objetivo de alcançar
        resultados eficientes. Meu foco é unir tecnologia e design para criar
        experiências digitais completas e centradas no usuário.
      </p>
      <div className="grid my-10 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border-[0.5px] border-gray-400 rounded-lg px-9 py-12 
                cursor-pointer hover:translate-y-1 duration-200 hover:shadow-black"
          >
            <Image src={icon} alt="" className="mx-auto items-center w-10" />

            <h3 className="text-center text-lg my-4 font-semibold text-gray-700 font-ovo">
              {title}
            </h3>

            <p className="text-center text-sm text-gray-600 leading-5">
              {description}
            </p>

            <a
              href={link}
              className="flex items-center gap-5 text-sm mt-5 text-gray-700 font-ovo"
            ></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
