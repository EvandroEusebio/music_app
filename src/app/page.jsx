"use client";
import React, {useContext} from "react";
import Player from "@/components/Player";
import CarrouselSongs from "@/components/CarrouselSongs";
import { TrackProvider } from "@/fearture/TrackContext";
import { ThemeProvider } from "@/fearture/ThemeContext";
import AppContent from "@/components/AppContent"

export default function App() {

  return (
    <TrackProvider>
      <ThemeProvider>
       <AppContent/>
      </ThemeProvider>
    </TrackProvider>
  );
}
