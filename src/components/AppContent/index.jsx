"use client";
import React, { useContext } from "react";
import Player from "@/components/Player";
import CarrouselSongs from "@/components/CarrouselSongs";
import ThemeContext from "@/fearture/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


export default function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main
      className=" flex-col min-h-screen  justify-center items-cente"
      style={{ backgroundColor: theme === "light" ? "white" : "#000" }}
    >
        <div className="flex p-5 justify-end">
            {
                theme === "light" ? (
                    <FaSun size={30} className="cursor-pointer" onClick={toggleTheme}/>

                ):(
                    <FaMoon size={30} className="cursor-pointer" onClick={toggleTheme} color="#fff"/>
                )
            }
            
        </div>
      <div className="flex items-center justify-center p-24">
        <Player />
      </div>
      <div className="flex items-center justify-center  w-full">
        <CarrouselSongs />
      </div>
    </main>
  );
}
