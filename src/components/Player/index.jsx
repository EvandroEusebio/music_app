"use client";
import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import "./style.css";
import TrackContext from "@/fearture/TrackContext";
import { tracks } from "@/utils/track_json";
import SlicePointerPhrase from '@/utils/SlicePointerPhrase/index'



export default function Player() {
  const {track, setTrack} = useContext(TrackContext)
  const [progress, setProgress] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = React.useRef(null);
  const inputRange = React.useRef(null);
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
      let width = clickRef.current?.clientWidth;
      const offset = e.nativeEvent.offsetX;

      const divprogress = (offset / width) * 100;
      audioRef.current.currentTime =
        (divprogress / 100) * audioRef.current.duration;
    }
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime;
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
  }, [isPlay, audioRef, repeat, track]);

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  function upTrack(){
    let atual_track_id = track[0].id
    let up_track = atual_track_id + 1
    if(up_track >= tracks.length){
      return
    }
    let newTrack = tracks.find(track => track.id === up_track)
    setTrack([newTrack])
  }

  function backTrack(){
    let atual_track_id = track[0].id
    let up_track = atual_track_id - 1
    if(up_track < 0){
      return
    }
    let newTrack = tracks.find(track => track.id === up_track)
    setTrack([newTrack])
  }

  return (
    <div className="flex-col gap-5 bg-primary p-10 text-secundary rounded-2xl w-96">
      <div className="flex max-sm:flex-col gap-3 justify-start content-center mb-5">
        <img src={track[0].thumbnail} className="block  h-24 rounded-2xl max-sm:w-full max-sm:h-auto" />
        <div className="justify-center content-center max-sm:my-4">
          <h1 className="text-2xl text-white ">{SlicePointerPhrase(track[0].title, 10)}</h1>
          <h1 className="text-secundary">{track[0].author}</h1>
        </div>
      </div>
      <div className="flex justify-center gap-20  max-sm:justify-between mb-5">
        <button onClick={backTrack}>
          <IoPlayBack size={20} />
        </button>
        <button onClick={() => setIsPlay(!isPlay)}>
          {isPlay ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <button onClick={upTrack}>
          <IoPlayForward size={20} />
        </button>
      </div>
      <div
        className="w-full h-1.5 rounded-2xl bg-progressSecundary mb-2 cursor-pointer max-sm:mt-5 max-sm:mb-3"
        ref={clickRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={checkWidth}
      >
        <div
          className="h-full rounded-2xl bg-progressPrimary "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center	">
        <p>{formatTime(audioRef.current?.currentTime)}</p>
        <p>{formatTime(audioRef.current?.duration)}</p>
      </div>
      <audio src={track[0].src} ref={audioRef} />
    </div>
  );
}
