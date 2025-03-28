import React from "react";
import { texture1 } from "../assets";
import AnimatedText from "./utils/AnimatedText";
import Button from "./utils/Button";

const BigTextBlock = ({ text, pText, py }) => {
  return (
    <div
      className={`lg:${
        py || "py-[12rem]"
      } py-20 text-center bg-primary relative`}
    >
      <img
        src={texture1}
        className="w-full h-full top-[50%] right-0 absolute z-[0] -translate-y-[50%] rotate-180 mix-blend-multiply opacity-50"
        alt=""
      />
      <div className="container xl">
        <h2 className="mb-16 font-delaGothic text-5xl leading-16 lg:text-7xl lg:leading-20 text-white">
          <AnimatedText duration={0.01} text={text} />
        </h2>
        <p className="text-primary-200 mt-20 mx-auto mb-12">
          <AnimatedText text={pText} />
        </p>
        <Button
          href={"/book"}
          children={"learn more"}
          className={
            "btn_submit hover:bg-primary-400 border border-primary-200"
          }
        />
      </div>
    </div>
  );
};

export default BigTextBlock;
