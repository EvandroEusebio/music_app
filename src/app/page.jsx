"use client";
import React from "react";
import Player from "@/components/Player";
import CarrouselSongs from "@/components/CarrouselSongs";
import { TrackProvider } from "@/fearture/TrackContext";

export default function App() {
  return (
    <TrackProvider>
      <main className=" flex-col min-h-screen  justify-center items-center bg-background">
        <div className="flex items-center justify-center p-24" >
          <Player />
        </div>
        <div className="flex items-center justify-center  w-full">
          <CarrouselSongs />
        </div>
      </main>
    </TrackProvider>
  );
}
