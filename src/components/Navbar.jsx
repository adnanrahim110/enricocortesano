import { useEffect, useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { audio, logo } from "../assets";
import { socials } from "../constants";
import Hamburger from "./utils/Hamburger";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoverinMenu, setIsHoverinMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-5 ${
        isMenuOpen
          ? "fixed w-full bg-white"
          : (location.pathname === "/" ? "bg-primary-50" : "bg-white") +
            " relative"
      } z-[1010]`}
    >
      <div className="container xl h-16">
        <div className="relative self-start w-[calc(1.4/8_*_100%)]">
          <Link to={"/"}>
            <img
              src={logo}
              alt=""
              className="w-full max-w-full absolute left-0 top-0"
            />
          </Link>
        </div>
        <div
          className={`flex ${
            isHoverinMenu
              ? "w-[calc(3.9/8_*_100%)]"
              : isMenuOpen
              ? "w-[calc(3.95/8_*_100%)]"
              : "w-4/8"
          } justify-end transition-all duration-150 ease-linear`}
        >
          <button
            className={`btn_submit rounded-none w-[24.75rem] ${
              location.pathname === "/"
                ? "bg-primary-200/50"
                : "bg-primary-100/70"
            } p-[10px_40px_10px_50px] m-0 relative overflow-hidden font-reklame tracking-wider before:absolute before:content-['Play_Audio'] before:content-center before:font-elCamino before:text-3xl before:text-center before:pl-11 before:text-white before:w-full before:h-full before:bg-primary before:top-0 before:left-0 before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300 before:ease-linear group`}
          >
            <span>
              <img
                src={audio}
                className="absolute h-full top-0 left-0"
                alt=""
              />
            </span>
            BTeP introduction
            <BsFillTriangleFill
              className={`w-[10px] right-[15px] group-hover:text-primary-50 group-hover:scale-120 group-hover:mt-0.5`}
            />
          </button>
        </div>
        <div
          className={`flex ${
            isHoverinMenu ? "mr-6" : isMenuOpen ? "mr-4" : "mr-0"
          } w-[calc(1.4/8_*_100%)] justify-end transition-all duration-150 ease-linear`}
        >
          <div
            className={`grid grid-cols-4 gap-0 w-full text-right ${
              location.pathname === "/"
                ? "bg-primary-100/50 border-primary-200"
                : "bg-primary-50/70 border-primary-200/50"
            } border overflow-hidden`}
          >
            {socials.map((social, index) => {
              const SocialIcon = social.icon;
              const textcolor = social.color;
              return (
                <a
                  key={index}
                  href={social.url}
                  className={`block not-last:border-r ${
                    location.pathname === "/"
                      ? "border-primary-200"
                      : "border-primary-200/50"
                  } h-16 relative transition-all duration-300 ease-in-out`}
                  style={{ color: textcolor }}
                  onMouseEnter={(e) => (
                    (e.currentTarget.style.backgroundColor = textcolor),
                    (e.currentTarget.style.color = "#fff")
                  )}
                  onMouseLeave={(e) => (
                    (e.currentTarget.style.backgroundColor = "transparent"),
                    (e.currentTarget.style.color = textcolor)
                  )}
                >
                  <SocialIcon className="w-full h-full max-w-3/5 max-h-3/5 absolute top-[50%] left-[50%] -translate-[50%]" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="relative h-16 w-[158px]">
          <div
            onClick={toggleMenu}
            className={`flex justify-end w-[158px] h-16 border group ${
              isMenuOpen
                ? "bg-primary shadow-[0_0_5px_3px_rgba(0,0,0,0.3)] hover:scale-110"
                : isScrolled
                ? "fixed right-12 bg-primary-100 border-primary-300 z-[1010]"
                : (location.pathname === "/"
                    ? "bg-primary-100/50 border-primary-200"
                    : "bg-primary-50 border-primary-200/50") + " relative"
            } transition-all duration-200 ease-in-out`}
            onMouseEnter={() =>
              isMenuOpen ? setIsHoverinMenu(true) : setIsHoverinMenu(false)
            }
            onMouseLeave={() => setIsHoverinMenu(false)}
          >
            <div className="absolute top-1/2 left-1/2 -translate-1/2">
              <Hamburger
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
