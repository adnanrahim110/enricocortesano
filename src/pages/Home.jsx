import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  eye_bg,
  homeimg1,
  homeimg2,
  homeimg3,
  someImgs_4,
  someImgs_h5,
  someImgs_h6,
} from "../assets";
import BigTextBlock from "../components/BigTextBlock";
import BooksVideos from "../components/BooksVideos";
import Menu from "../components/Menu";
import MenuItems from "../components/MenuItems";
import Newsletter from "../components/Newsletter";
import PageSLider from "../components/PageSLider";
import AnimatedText from "../components/utils/AnimatedText";

const pagesliderImgs = [
  {
    img: someImgs_h5,
  },
  {
    img: someImgs_h6,
  },
  {
    img: someImgs_4,
  },
];

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="h-[calc(-66px_+_100dvh)] max-h-[60rem] flex items-center relative bg-primary-50">
        <img
          src={eye_bg}
          className="absolute z-[0] top-[50%] left-0 -translate-y-[50%] h-full align-middle opacity-5"
          alt=""
        />
        <div className="container xl relative h-full z-[1] flex lg:flex-row-reverse justify-between items-center">
          <div className="w-[50%] pr-12 font-telegraf font-bold">
            <h1 className="font-delaGothic text-[4.2rem] leading-snug mb-8 text-black">
              <AnimatedText
                text={"Step into a Culinary Journey Like No Other"}
              />
            </h1>
            <AnimatedText
              as="h3"
              className="font-delaGothic text-4xl leading-snug mb-14"
              text={
                "Discover the rich flavors and traditions of Italian cuisine through the eyes of Enrico."
              }
            />
            <p className="text-gray-500 text-3xl">
              <AnimatedText
                text={
                  "I believe cooking is more than just a skill—it’s an art that blends love, tradition, and creativity. Using fresh, local ingredients and honoring time-honored techniques while welcoming innovation and personal touches brings dishes to life. Food is more than nourishment; it’s a bridge that connects people, fosters togetherness, and creates lasting memories around the table."
                }
                duration={0.005}
              />
            </p>
          </div>
          <div className="w-1/2 h-full min-h-[360px] -ml-12 relative">
            <Swiper
              modules={[Autoplay, EffectFade]}
              loop
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={2000}
              effect="fade"
              className="w-full h-full"
            >
              {[homeimg1, homeimg2, homeimg3].map((img, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className=" overflow-hidden h-full">
                    <img
                      src={img}
                      className=" w-full h-full top-0 left-0 min-h-[360px]"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <BigTextBlock
        text={
          "An ancient oven, a lost recipe, and a city that holds its secrets close—The Legend of the Lost Oven is an unforgettable journey into the heart of Naples."
        }
        pText={"A Secret Buried in Fire… A Legend Waiting to Be Uncovered!"}
      />
      <MenuItems />
      <PageSLider
        sliderImgs={pagesliderImgs}
        subtitle={"MY MAXIM"}
        strongText={
          "Pizza’s greatest secret lies within—are you to uncover it?"
        }
      />
      <Newsletter />
      <BooksVideos />
    </>
  );
};

export default Home;
