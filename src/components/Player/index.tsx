"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaPause } from "react-icons/fa6";
import "./style.css";

export default function Player() {
  const [progress, setProgress] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const inputRange = React.useRef<HTMLInputElement>(null);
  const playAnimationRef = React.useRef(null);
  const clickRef = useRef();

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const checkWidth = (e) => {
    if (isDragging) {
      let width = clickRef.current.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const divprogress = (offset / width) * 100;
      audioRef.current.currentTime =
        (divprogress / 100) * audioRef.current.duration;
    }
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime;
    console.log(currentTime);
    setProgress((currentTime / audioRef.current?.duration) * 100);

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, audioRef.current?.duration, setProgress, inputRange]);

  useEffect(() => {
    if (isPlay) {
      if (audioRef.current) {
        audioRef.current.play();
        playAnimationRef.current = requestAnimationFrame(repeat);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
    //playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlay, audioRef, repeat]);

  const formatTime = (time: any) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
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
      <div
        className="w-full h-1 rounded-2xl bg-progressSecundary "
        ref={clickRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={checkWidth}
      >
        <div
          className="h-1 rounded-2xl bg-progressPrimary "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center	">
        <p>{formatTime(audioRef.current?.currentTime)}</p>
        <p>{formatTime(audioRef.current?.duration)}</p>
      </div>
      <audio src="/music.mp3" ref={audioRef} />
    </div>
  );
}
