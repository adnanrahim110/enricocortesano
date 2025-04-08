import React from "react";
import { Link } from "react-router-dom";
import { mi1, mi2, mi3, texture1 } from "../assets";

const MenuItems = () => {
  return (
    <div className="container xl relative bg-primary-950">
      <img
        src={texture1}
        className="w-full h-full top-[50%] right-0 absolute z-[0] -translate-y-[50%] rotate-180 mix-blend-multiply opacity-10"
        alt=""
      />
      <div className="text-center py-20 lg:py-40">
        <ul className="flex flex-col lg:flex-row gap-36 lg:gap-20 items-center justify-center mt-20 lg:mt-32 mb-0 lg:mb-8">
          {[
            {
              title: "Neapolitan Panzarotti",
              subtitle: "FRIED",
              img: mi1,
              url: "/blogs/neapolitan-panzarotti",
            },
            {
              title: "Macaroni Omelette",
              subtitle: "PASTA",
              img: mi2,
              url: "/blogs/macaroni-omelette",
            },
            {
              title: "Banana Bread",
              subtitle: "SWEETS",
              img: mi3,
              url: "/blogs/banana-bread",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="relative z-[2] aspect-[10/14] rounded-2xl w-[calc(100%_-_1.25rem)] lg:w-[27%] mb-4 transform lg:not-[:nth-child(2)]:translate-y-8 lg:first:-rotate-[5deg] lg:last:rotate-[5deg]"
            >
              <Link to={item.url} className="group">
                <div className="absolute w-[90%] h-80 border-[3px] border-primary-500 z-[2] -top-20 left-[50%] -translate-x-[50%] group-hover:top-0 group-hover:w-full group-hover:h-full transition-all duration-150 ease-linear">
                  <div className="w-full h-full bg-white/40 text-center py-8 px-4">
                    <span className="text-primary-500 underline underline-offset-4 text-[20px] font-elCamino group-hover:[text-shadow:0_2px_2px_rgba(0,0,0,0.7)]">
                      {item.subtitle}
                    </span>
                    <h3 className="font-reklame text-7xl mt-10 text-primary-500 font-bold [text-shadow:0_4px_2px_rgba(0,0,0,0.6)]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div
                  className="bg-cover bg-center bg-no-repeat w-full h-full"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <img
                    src={item.img}
                    className="object-cover object-center absolute left-0 top-0 h-full w-full z-0"
                    alt=""
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
