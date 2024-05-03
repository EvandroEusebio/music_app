"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import TrackContext from "@/fearture/TrackContext";
import { tracks } from "@/utils/track_json";
import "swiper/css";
//import music from './music.mp3'
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CarrouselSongs() {
  const { track, setTrack } = useContext(TrackContext);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: -75,
        depth: 250,
        modifier: 3.5,
        slideShadows: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      onSlideChange={(swiper) => {
        let newTrack = tracks.find((track) => track.id === swiper.activeIndex);
        setTrack([newTrack]);
      }}
      //onSwiper={(swiper) => console.log(swiper)}
      modules={[EffectCoverflow, Navigation]}
    >
      {tracks.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.thumbnail}
            className=" w-auto h-auto rounded-2xl mx-auto object-cover"
          />
          <div className="text-secundary">
            <p className="font-bold text-2xl">{item.title}</p>
            <p>Por {item.author}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

/*

<SwiperSlide key={index}>
          <img
            src={item.thumbnail}
            className=" w-auto h-auto cursor-pointer rounded-2xl mx-auto object-cover"
          />
        </SwiperSlide>
  */
