import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./utils/Button";

const PageSLider = ({ sliderImgs, strongText, subtitle, btnText, btnUrl }) => {
  return (
    <div className="p-8">
      <div className="border-[1rem] border-primary-200 rounded-4xl overflow-hidden relative aspect-[15/7] pageslider">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={12000}
          className="h-full"
        >
          {sliderImgs.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.img}
                alt=""
                className="object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-radial from-black/30 via-black/70 to-black flex items-center justify-center flex-col">
          {subtitle && (
            <h2 className="text-3xl text-primary-700 underline underline-offset-4 decoration-2 leading-16 max-w-[65rem] my-0 mx-auto text-center mb-16">
              {subtitle}
            </h2>
          )}
          <strong className="text-6xl leading-16 max-w-[65rem] my-0 mx-auto text-center mb-16">
            {strongText}
          </strong>
          {btnText && (
            <Button
              href={btnUrl}
              children={btnText}
              className={
                "btn_submit text-primary-950 bg-primary-500 hover:bg-primary-200 leading-[22px]"
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageSLider;
