"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaPause } from "react-icons/fa6";

export default function Player() {
  const [progress, setProgress] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const inputRange = React.useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    if (isPlay) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [isPlay, audioRef]);

  //console.log(audioRef)
  const onLoadedMetadata = () => {
    console.log(audioRef.current?.duration);
  };

  const formatTime = (time: any) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  return (
    <div className="flex-col gap-5 bg-primary p-10 text-secundary rounded-2xl">
      <div className="flex gap-3 justify-center content-center">
        <img src="/profile.jpg" className="block mx-auto h-24 rounded-2xl" />
        <div className="justify-center content-center">
          <h1>Da Banda</h1>
          <h1>Por Evandro Eusébio</h1>
        </div>
      </div>
      <div className="flex justify-center gap-20 my-5">
        <button>
          <IoPlayBack size={20} />
        </button>
        <button onClick={() => setIsPlay(!isPlay)}>
          {isPlay ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <button>
          <IoPlayForward size={20} />
        </button>
      </div>
      <div>
        <input type="range" className="w-full" ref={inputRange} defaultValue={progress}/>
      </div>
      <div className="flex justify-between items-center	">
        <p>{formatTime(audioRef.current?.currentTime)}</p>
        <p>{formatTime(audioRef.current?.duration)}</p>
      </div>
      <audio src="/music.mp3" ref={audioRef}  onLoadedMetadata={onLoadedMetadata}/>
    </div>
  );
}
