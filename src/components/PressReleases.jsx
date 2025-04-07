import React from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { pressreleases } from "../constants";

const PressReleases = () => {
  return (
    <div className="pageslider h-full">
      <Swiper
        // modules={[Autoplay]}
        loop
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5000}
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 15 },
          576: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="h-full"
      >
        {pressreleases.map((release, index) => (
          <SwiperSlide key={`pr-${index}`}>
            <Link
              to={release.url}
              className="flex h-full items-center justify-center text-black text-base"
            >
              <img
                src={release.img}
                alt="Press Release"
                className="w-full h-auto object-contain object-center"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PressReleases;
