import React, { useRef, useState } from "react";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { amz1, buyamz, videos_bookdesc } from "../assets";
import SwiperBtn from "./utils/SwiperBtn";

const BooksVideos = () => {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="container xl">
      <div className="grid grid-cols-12 aspect-video lg:aspect-[5/1] gap-5 mb-10 lg:mb-20 mt-16">
        <div className="relative col-span-12 w-full h-full row-span-1 rounded-2xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 2000 }}
            speed={2500}
            loop
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10, speed: 1500 },
              786: { slidesPerView: 2, spaceBetween: 20, speed: 2500 },
              1024: { slidesPerView: 3 },
            }}
            className="h-full w-full rounded-2xl"
          >
            {[
              "https://www.youtube.com/embed/yQ4LX8uQOLA?si=9wZL_yLKu3cso8lr",
              "https://www.youtube.com/embed/F8YwEIh90a8?si=YNEBVB84mK7RoOJp",
              "https://www.youtube.com/embed/6YpaZn-DuhM?si=n9gRDZofOo7d4qic",
              "https://www.youtube.com/embed/GbFU8qEDrOY?si=4yUpwFnTnTt9vp1U",
              "https://www.youtube.com/embed/Ztow4g68dj4?si=zTDyMX5-Bu7I2UzS",
            ].map((link, i) => (
              <SwiperSlide className="h-full" key={i}>
                <div
                  className={`overflow-hidden h-full rounded-2xl border-[1rem] bg-primary-200 border-primary-200`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hidden md:block">
            <SwiperBtn
              direction={"prev"}
              onClick={() => swiperRef.current.slidePrev()}
              mt={"mt-0"}
              w_h={"lg:w-20 lg:h-20"}
              xaxis={"lg:-left-10"}
              bg={
                "bg-white/10 hover:bg-white/50 border-white/50 hover:border-white/70"
              }
            />
            <SwiperBtn
              direction={"next"}
              onClick={() => swiperRef.current.slideNext()}
              mt={"mt-0"}
              w_h={"lg:w-20 lg:h-20"}
              xaxis={"lg:-right-10"}
              bg={
                "bg-white/10 hover:bg-white/50 border-white/50 hover:border-white/70"
              }
            />
          </div>
        </div>
      </div>
      <div className="border-[1rem] border-primary-200 rounded-4xl overflow-hidden relative aspect-video lg:aspect-[16/7] mb-48">
        <video
          ref={videoRef}
          src={videos_bookdesc}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        ></video>
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-radial from-black/10 via-black/50 to-black flex items-end lg:items-start justify-start lg:justify-end p-4 lg:p-8 flex-row lg:flex-col gap-2">
          {[
            {
              img: amz1,
              url: "https://www.amazon.it/Leggenda-del-Forno-Perduto-culinaria/dp/B0DSLK62KC/ref=sr_1_1?crid=3OEAAOJ1GDETP&dib=eyJ2IjoiMSJ9.KetJGrEeUzu818oHCH-tBppr23bmUN28pbqwPt92ZlVpwyeriDo_P6AsCqfJfJ0bxYY1PwPj1jUoZMWXQm02fT67PvfPEeBEPRij8GTxiLSKG2N8GH6aeisfozzIJ9BQ.O4RxkjVs28WFa3ovREaxXBskCEZU5C5ldeiS5b7-5UI&dib_tag=se&keywords=la+leggenda+del+forno+perduto&qid=1739542365&sprefix=%2Caps%2C195&sr=8-1",
            },
            {
              img: buyamz,
              url: "https://www.amazon.com/Legend-Lost-Oven-history-culinary/dp/B0DTPCZZ95/ref=sr_1_1?crid=13VYG7GK191ZA&dib=eyJ2IjoiMSJ9.cRoyNvHReETUM_fUdf791K-1lfiq51bZvT9PuliyBESg0vM-kX22-hp8885a2Cts2kYwppHynyJGUrxHE61NSArBF0HNOGW4-iTcOYM03pYiXT8I849JTSdJs5yItUkovLkiPK4VUEYXZUDyJnr-XbV9mb0Xpm9I7Sgu7se7Z0x1PYQCNxZEqMxi8z0G4vmqsURkOYA_2B3Wx-68CxvctVERBc_hO6fydKBcnAKW3ro.FklN5hOZMLh418Nyyj_BOxAO8O2AmWyp7FAvmNrXQbk&dib_tag=se&keywords=the+legend+of+the+lost+oven&qid=1739542405&sprefix=%2Caps%2C108&sr=8-1",
            },
          ].map((item, i) => (
            <Link key={item.url} to={item.url} target="_blank">
              <img
                src={item.img}
                className="w-40 lg:w-80 transition-all duration-200 transform will-change-transform scale-90 hover:scale-95 ease-in grayscale-100 hover:[filter:drop-shadow(0_0_5px_rgba(255,255,255,0.3))_grayscale(0%)]"
                alt=""
              />
            </Link>
          ))}
          <button
            className="absolute top-8 right-8 bg-white/5 border border-white/10 backdrop-blur-xs rounded-xl p-2 lg:p-3 transition-all duration-200 ease-in"
            onClick={handleAudio}
          >
            {isMuted ? (
              <MdOutlineMusicOff className="text-4xl lg:text-5xl transform transition-all duration-200 ease-in-out hover:scale-110" />
            ) : (
              <MdOutlineMusicNote className="text-4xl lg:text-5xl transform transition-all duration-200 ease-in-out hover:scale-110" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksVideos;
