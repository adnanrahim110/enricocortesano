import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../constants";
import AnimatedText from "./utils/AnimatedText";
import FadeInView from "./utils/FadeInView";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className={`bg-white fixed top-0 left-0 w-dvw overflow-x-hidden overflow-y-auto ${
            isMenuOpen
              ? "lg:min-h-[800px] lg:h-dvh z-[1000]"
              : "min-h-0 h-0 z-[4]"
          }`}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {[
            "https://www.youtube.com/embed/T0MAwrdsGwM?si=niuQe9JEewjbPnAj",
            "https://www.youtube.com/embed/FfKzZ81U6rQ?si=NopL1axcBCUPvnxu",
          ].map((link, i) => (
            <div
              key={i}
              className={`absolute z-[999] max-lg:w-[calc(50%_-_5px)] max-lg:aspect-video lg:max-w-xl max-lg:top-[unset] max-lg:bottom-5 ${
                i === 0 ? "left-0 lg:left-[5%]" : "right-0 lg:right-[5%]"
              } lg:-translate-y-[50%] lg:top-[35%]`}
            >
              <iframe
                className="hover:-mt-10 transition-all duration-200 ease-[ease]"
                width="100%"
                height="100%"
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
          <div className="relative h-dvh w-full flex justify-center items-start lg:items-center pt-72 lg:pt-44 z-[100]">
            <div className=" w-full">
              <div className="w-full">
                <ul>
                  {navigation.slice(0, -2).map((item, index) => (
                    <FadeInView
                      delay={index * 0.03}
                      key={index}
                      className="lg:text-center mb-2 lg:mb-6 text-start pl-10 max-lg:bg-gray-50 max-lg:py-5 max-lg:hover:bg-gray-100"
                    >
                      <Link
                        to={item.url}
                        className={`font-resonay-base leading-none transition-all duration-200 ease-in-out ${
                          location.pathname === item.url
                            ? "text-primary"
                            : "text-black hover:text-primary-500"
                        } uppercase text-5xl lg:text-[4rem] relative group`}
                      >
                        {item.title.includes("/")
                          ? item.title.split("/").map((part, index, arr) => (
                              <React.Fragment key={index}>
                                <span className="mb-1">{part.trim()}</span>
                                {index < arr.length - 1 && (
                                  <>
                                    <br className="hidden lg:block" />
                                    <span className="lg:hidden font-reklame mx-3">
                                      /
                                    </span>
                                  </>
                                )}
                              </React.Fragment>
                            ))
                          : item.title}
                      </Link>
                    </FadeInView>
                  ))}
                </ul>
              </div>
              <div className="pt-20 pb-16 mx-0 w-full relative z-[2] bg-gray-50">
                <div className="static lg:absolute w-full py-1 text-start lg:text-center top-[50%] -translate-y-[50%] left-0 inline-flex items-start justify-start pl-10 lg:pl-0 lg:justify-center z-[1]">
                  {isMenuOpen && (
                    <>
                      <AnimatedText
                        as={Link}
                        to={"/categories"}
                        text={"CATEGORIES"}
                        yaxis={50}
                        duration={0.04}
                        delay={0.3}
                        className="hidden lg:block text-9xl opacity-[0.1] z-[1] text-transparent text-stroke leading-none"
                      />
                      <Link
                        to={"/categories"}
                        className="lg:hidden text-5xl text-gray-800"
                      >
                        Categories :
                      </Link>
                    </>
                  )}
                </div>
                <ul className="flex flex-col lg:flex-row pl-10 lg:pl-0 justify-center relative z-[3]">
                  {navigation.slice(-1)[0].category.map((item, index) => (
                    <li className="not-last:mr-10">
                      <Link
                        to={item.url}
                        className={`font-elCamino text-3xl underline ${
                          location.pathname === item.url
                            ? "decoration-primary text-primary"
                            : "decoration-transparent hover:decoration-primary-400 text-primary-400 hover:text-primary-400"
                        } underline-offset-4 transition-all duration-200 ease-in-out`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
