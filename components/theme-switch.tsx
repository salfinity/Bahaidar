"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed z-50 top-5 left-5 md:bottom-5 md:right-5 md:top-auto md:left-auto bg-white w-[3rem] h-[3rem] bg-opacity-80 
      backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800
      shadow-lg rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 
      transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      style={{animation: 'none'}}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}