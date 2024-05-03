"use client";
import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import TrackContext from "@/fearture/TrackContext";
import "swiper/css";
//import music from './music.mp3'
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const tracks = [
  {
    title: "INTOUCHABLE - Gloria Kazadi M",
    src: "/gloria_music.mp3",
    author: "Trinix ft Rushawn",
    thumbnail: "https://i.scdn.co/image/ab67616100005174b80ed6c858e031aa15013229",
  },
  {
    title: "RESTAURÉ",
    src: "/debora_music.mp3",
    author: "Deborah Lukalu",
    thumbnail: "https://viberatecdn.blob.core.windows.net/entity/artist/deborah-lukalu-Hxkvk",
  },
  {
    title: "hallelujah, salvation, and glory",
    src: "/kanye_west.mp3",
    author: "Kanye West Sunday Service",
    thumbnail: "https://i1.sndcdn.com/artworks-000635011243-d5nwn9-t500x500.jpg",
  },
  {
    title: "Trinix ft Rushawn Its a beautiful day",
    src: "/music02.mp3",
    author: "Hulvey, Forrest Frank",
    thumbnail: "https://i.ytimg.com/vi/5lyb3mDBEW0/maxresdefault.jpg"
  },
  {
    title: "Rémunérateur Remix",
    src: "/music.mp3",
    author: "Faveur Mukoko",
    thumbnail: "https://cdns-images.dzcdn.net/images/cover/71d7536485ca2915e6a03bc4d641b7b1/264x264.jpg",
  },
];

export default function CarrouselSongs() {
  const {track, setTrack } = useContext(TrackContext)
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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[EffectCoverflow, Navigation]}
      
    >
      {tracks.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.thumbnail}
            className=" w-auto h-auto cursor-pointer rounded-2xl mx-auto object-cover"
            onClick={()=>{
              setTrack(item.src)
            }}
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