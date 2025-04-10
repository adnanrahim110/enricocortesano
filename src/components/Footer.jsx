import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets";
import { navigation, socials } from "../constants";
import Promo from "./Promo";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <Promo />
      <div className="container xl">
        <div className="border-y border-primary-400 mb-2 flex flex-col lg:flex-row bg-primary-50">
          <div className="flex flex-col w-full lg:w-[33.33%] border-x lg:border-r-0 lg:border-l border-primary-400 pt-12">
            <img
              src={logo}
              className="self-start h-40 mb-5 object-contain"
              alt=""
            />
            <div className="mt-auto">
              <ul>
                {navigation
                  .filter((_, index) => index !== navigation.length - 2)
                  .slice(1)
                  .map((item, index) => (
                    <li
                      key={index}
                      className={`border-b border-primary/40 leading-none ${
                        location.pathname === item.url
                          ? "bg-primary-100 text-primary border-primary"
                          : "text-gray-500 hover:text-black hover:border-primary"
                      } transition-all duration-150 ease-in`}
                    >
                      <Link
                        to={item.url}
                        className="block py-4 pl-4 transition-opacity duration-300 ease-in"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[33.33%] px-8 border-x border-b border-primary-400">
            <div className="max-h-[400px] overflow-hidden -mx-8">
              <iframe
                src="https://feed.mikle.com/widget/v2/172245/?preloader-text=Loading&"
                height="420px"
                width="100%"
                className="fw-iframe"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[33.33%] px-8 border-x lg:border-l-0 lg:border-r border-primary-400 pt-12">
            <strong className="mb-7 block font-medium">
              Stay in the loop!
            </strong>
            <p className="font-telegraf max-w-2/3 text-2xl text-primary-500 opacity-70 mb-12 lg:mb-6">
              Don’t miss out on the latest updates—follow me on social media and
              be part of the journey! Let’s stay connected!
            </p>
            <div className="mt-auto flex mb-4">
              {socials.map((item, i) => {
                const SocialIcon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    className="border-2 relative overflow-hidden border-primary-200 w-16 h-16 flex justify-center items-center rounded-full mr-6 hover:text-primary-600 transition-colors duration-200 ease-linear before:absolute before:w-full before:h-full before:bg-primary-200 before:translate-y-6/7 before:opacity-30 hover:before:opacity-100 hover:before:translate-y-0 before:z-0 before:transition-transform before:duration-200 before:ease-linear"
                  >
                    <SocialIcon className="relative z-[1]" />
                  </a>
                );
              })}
            </div>
            <div className="mt-3">
              <ul className="text-primary-400">
                <li>
                  <Link
                    to={"mailto:info@baccotabaccoepasta.com"}
                    className="block font-telegraf py-[0.6rem] transition-opacity duration-300 ease-in hover:text-primary"
                  >
                    info@baccotabaccoepasta.com
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={`block font-telegraf py-[0.6rem] transition-opacity duration-300 ease-in ${
                      location.pathname === "/contact"
                        ? "text-primary font-bold"
                        : "hover:text-primary"
                    }`}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4 border-y border-primary-400 py-3 -mx-8">
              <p className="text-primary-500/50 font-normal font-telegraf text-[15px] leading-none pl-8">
                &copy; {new Date().getFullYear()} -{" "}
                <Link to={"/"}>bacco tabacco e pasta</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
