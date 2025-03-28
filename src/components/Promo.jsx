import React from "react";
import { cal, cal2, footer_eye } from "../assets";
import Button from "./utils/Button";

const Promo = () => {
  return (
    <div>
      <div className="container xl relative my-16">
        <div className="bg-primary-100 lg:h-[40rem] w-full relative flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-[55%] p-12">
            <span className="text-3xl lg:text-[1.6rem] text-primary-400 font-telegraf font-bold relative flex items-center">
              <img src={footer_eye} className="h-8 mr-4 hue-rotate-30" alt="" />
              Pizza Calculator
            </span>
            <h3 className="mt-8 mb-10 font-delaGothic font-medium text-[18px] lg:text-[24px] leading-snug text-primary-500">
              A hidden dish cherished by those who appreciate the magic of a
              perfect crust. A place where cheese melts into creamy perfection,
              sauce reflects the legacy of tradition, and every bite is a
              celebration of passion, skill, and the art of flavor in a pizza.
            </h3>
            <Button children={"Calculate Pizza"} href={"/pizza-calcolatore"} />
          </div>
          <div className="hidden md:block h-full w-full lg:w-[35%] ml-auto mr-40 relative max-2lg:mr-12">
            <img
              src={cal}
              className="absolute bottom-0 transform right-0 w-[60%] translate-y-12 rotate-[5deg]"
              alt=""
            />
            <img
              src={cal2}
              className="absolute bottom-0 transform left-0 w-[60%] translate-y-24 -rotate-[3deg]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
