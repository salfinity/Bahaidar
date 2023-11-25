"use client";

import { IoReorderThree } from 'react-icons/io5';

const DropdownMenu = () => {
  return (
    <button
      className="fixed z-50 top-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
      border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 shadow-lg rounded-full flex 
      items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 md:hidden"
      style={{animation: 'none'}}   
   >
      <IoReorderThree />
    </button>
  )
}

export default DropdownMenu;
