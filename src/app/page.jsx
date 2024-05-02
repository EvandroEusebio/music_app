import React from "react";
import Player from "@/components/Player";
import CarrouselSongs from "@/components/CarrouselSongs";

export default function Home() {
  return (
    <main className=" flex-col min-h-screen  items-start justify-center p-24 bg-background">
      <div className="flex items-center justify-center mb-32"> 
        <Player />
      </div>
      <CarrouselSongs />
    </main>
  );
}
