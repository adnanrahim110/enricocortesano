import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, className, imgClass }) => {
  return (
    <Link
      to={card.path}
      className={`block rounded-lg transition-all duration-300 ease-[ease] ${
        className || " hover:bg-primary-800 group"
      }`}
    >
      <div
        className={`rounded-lg overflow-hidden border-[.1rem] group-hover:border-[2rem] group-hover:border-primary-800 border-transparent transition-all duration-300 ease-[ease] relative ${
          imgClass || " aspect-square"
        }`}
      >
        <img
          src={card.img}
          className="transition-all duration-300 ease-[ease] object-cover group-hover:rounded-[3rem] object-center absolute top-0 left-0 w-full h-full"
          alt=""
        />
      </div>
      <div className="pt-8 px-4 pb-4">
        {card.date && (
          <p className="text-primary-800 group-hover:text-primary-600 tracking-wider font-delaGothic text-[1.4rem] font-normal">
            {card.date} -{" "}
            <span className="text-primary-400">{card.category}</span>
          </p>
        )}
        <h4
          className={`text-[2.5rem] leading-[2.8rem] mt-8 mb-7 font-reklame font-black ${
            card.date && "text-primary-500"
          }`}
        >
          {card.title}
        </h4>
        <p className={`font-telegraf font-bold ${card.date && "line-clamp-2"}`}>
          {card.text}
        </p>
      </div>
    </Link>
  );
};

export default Card;
