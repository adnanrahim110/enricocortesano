import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === "100%") {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Text = "Scroll";
  const textVertical = Text.split("");

  return (
    <div
      onClick={scrollToTop}
      className={`fixed z-[100] bottom-1 right-0 bg-gray-800 border-2 border-primary-100 hover:bg-black text-primary transition-all duration-200 ease-linear cursor-pointer group ${
        isScrollDown
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-24"
      }`}
    >
      <span className="flex flex-col items-center justify-center px-2 py-5 group-hover:pt-8 transition-all duration-200 ease-linear">
        <FaArrowUpLong className="mb-4 group-hover:-translate-y-3 transition-all duration-200 ease-linear" />
        {textVertical.map((char, index) => (
          <span key={index} className="text-lg uppercase font-elCamino">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </div>
  );
};

export default ScrollToTop;
