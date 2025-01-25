import React from "react";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="Services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">O que eu ofereço</h4>
      <h2 className="text-center text-5xl font-ovo">Meus serviços</h2>
      <p className="text-center max-w-2xl mx-auto mt-10 mb-10 font-ovo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum, odio nec tincidunt ultricies, nunc justo scelerisque
        mauris, nec vestibulum metus sapien sit amet nulla. Nulla facilisi.
        Vivamus nec nunc non mi varius vestibulum. Nullam auctor, metus quis
        ultricies ultricies, metus nisl lacinia risus, nec ultricies elit ligula
        et ex. Nullam sit amet felis vel sapien ultricies pulvinar. Vestibulum
        ante ipsum primis in faucibus or
      </p>
      <div className="grid  my-10 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border-[0.5px] border-gray-400 rounded-lg px-8 py-12 
                cursor-pointer hover:translate-y-1 duration-200 hover:shadow-black"
          >
            <Image src={icon} alt="" className="w-10" />

            <h3 className="text-lg text-center my-4 font-semibold text-gray-700 font-ovo">
              {title}
            </h3>

            <p className="text-sm text-gray-600 leading-5">{description}</p>

            <a
              href={link}
              className="flex items-center gap-5 text-sm mt-5 text-gray-700 font-ovo"
            >
              Read more{" "}
              <Image
                alt=""
                src={assets.right_arrow}
                className="w-4"
                alt="Right arrow"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
