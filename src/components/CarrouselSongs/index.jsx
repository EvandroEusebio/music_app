"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
//import music from './music.mp3'
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const tracks = [
  {
    title: "Trinix ft Rushawn Its a beautiful day",
    src: "/music.mp3",
    author: "Trinix ft Rushawn",
    thumbnail: "/profile.jpg",
  },
  {
    title: "Trinix ft Rushawn Its a beautiful day",
    src: "/music.mp3",
    author: "Aline Barros",
    thumbnail: "https://pbs.twimg.com/profile_images/1687212785799741440/lgTa0GEi_400x400.jpg",
  },
  {
    title: "Trinix ft Rushawn Its a beautiful day",
    src: "/music.mp3",
    author: "Harpa Cristã",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLanQlZAXy9UuLM3MPMYUeZauACMu4DhSEtmX2S89wWQ&s",
  },
  {
    title: "Trinix ft Rushawn Its a beautiful day",
    src: "/music.mp3",
    author: "Renascer Praise",
    thumbnail: "https://hotmart.s3.amazonaws.com/product_pictures/765bfea5-e270-44ff-bd7c-2185af1bcb39/Capturadetela20230523193615.png",
  },
  {
    title: "Trinix ft Rushawn Its a beautiful day",
    src: "/music.mp3",
    author: "Gabriela Rocha",
    thumbnail: "https://jeonline.com.br/images/noticias/18207/18207222510.jpg",
  },
];

export default function CarrouselSongs() {
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