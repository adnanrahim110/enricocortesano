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
          className={`bg-white fixed top-0 left-0 w-full overflow-x-hidden overflow-y-auto ${
            isMenuOpen ? "min-h-[800px] h-dvh z-[1000]" : "min-h-0 h-0 z-[4]"
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
            <FadeInView
              key={i}
              delay={0.3}
              duration={1}
              className={`absolute z-[999] max-xl:max-w-xl top-[50%] ${
                i === 0 ? "left-[5%]" : "right-[5%]"
              } -translate-y-[50%] max-xl:top-[35%]`}
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
            </FadeInView>
          ))}
          <div className="relative h-dvh w-dvw flex justify-center items-center max-xl:pt-44 z-[100]">
            <div className="mt-40 max-xl:mt-0">
              <div>
                <ul>
                  {navigation.slice(0, -2).map((item, index) => (
                    <FadeInView
                      as="li"
                      delay={index * 0.05}
                      key={index}
                      className="text-center mb-8"
                    >
                      <FadeInView
                        as={Link}
                        to={item.url}
                        className={`font-resonay-base text-[7rem] leading-none ${
                          location.pathname === item.url
                            ? "text-primary"
                            : "text-gray-600 hover:text-black"
                        } uppercase max-xl:text-[4rem] relative`}
                      >
                        <span
                          className={`absolute w-3 h-px bg-primary top-1/2 -translate-y-1/2 ${
                            location.pathname === item.url
                              ? "opacity-100 -left-5"
                              : "opacity-0"
                          }`}
                        ></span>
                        <span
                          className={`absolute w-3 h-px bg-primary top-1/2 -translate-y-1/2 ${
                            location.pathname === item.url
                              ? "opacity-100 -right-5"
                              : "opacity-0"
                          }`}
                        ></span>
                        {item.title}
                      </FadeInView>
                    </FadeInView>
                  ))}
                </ul>
              </div>
              <div className="pt-20 pb-16 mx-0 w-full relative z-[2]">
                <div className="absolute w-full py-1 text-center top-[50%] -translate-y-[50%] left-0 inline-flex items-start justify-center z-[1]">
                  {isMenuOpen && (
                    <AnimatedText
                      as={Link}
                      to={"/categories"}
                      text={"CATEGORIES"}
                      yaxis={50}
                      duration={0.04}
                      delay={0.3}
                      className="text-9xl opacity-[0.15] z-[1] text-transparent text-stroke leading-none"
                    />
                  )}
                </div>
                <ul className="flex justify-center relative z-[3]">
                  {navigation.slice(-2)[0].category.map((item, index) => (
                    <FadeInView
                      as="li"
                      delay={0.1}
                      duration={1}
                      key={index}
                      className="not-last:mr-10"
                    >
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
                    </FadeInView>
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
