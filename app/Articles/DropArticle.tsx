'use client';

import { IoReorderThree, IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import TwitterXImg from '/public/twitter.png';
import { FaTiktok, FaYoutube, FaInstagramSquare } from 'react-icons/fa';

const DropArticle = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            <button
                className="fixed z-50 top-5 right-5 bg-white w-[4rem] h-[4rem] md:w-[3rem] md:h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
        border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 shadow-lg rounded-full flex 
        items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 md:hidden"
                onClick={toggleDropdown}
                style={{ animation: 'none' }}
            >
                {isDropdownOpen ? (
                    <IoClose size={30} />
                ) : (
                    <IoReorderThree size={30} />
                )}
            </button>

            {isDropdownOpen && (
                <div
                    className="fixed z-40 min-w-[70vw] flex flex-col justify-between items-center top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 bg-white/75 dark:bg-slate-800/90  p-4 border border-white 
                    border-opacity-40 shadow-slate-900 dark:shadow-slate-800 shadow-lg rounded-lg dark:text-slate-950 
                    text-slate-100 backdrop-blur-md py-32"
                >
                    {/* Your dropdown content goes here */}
                    <nav className="w-max py-3 px-8 font-medium text-capitalize flex flex-col items-center justify-center gap-8  mb-16 ">
                        <Link
                            href="/All"
                            className="text-black dark:text-white"
                        >
                            All
                        </Link>
                        <Link
                            href="/Featured"
                            className="text-black dark:text-white"
                        >
                            Featured
                        </Link>
                        <Link
                            href="/Categories"
                            className="text-black dark:text-white"
                        >
                            Categories
                        </Link>
                    </nav>
                    <nav className="flex items-center justify-center gap-4 cursor-pointer flex-wrap sm:mx-1 text-black dark:text-white">
                        <Link
                            href="https://twitter.com/dr_m_bahaidar/"
                            target="_blank"
                        >
                            <img src={TwitterXImg.src} className="w-8 h-8" />
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@doctor_bahaidar"
                            target="_blank"
                        >
                            <FaTiktok size={30} />
                        </Link>
                        <Link
                            href="https://www.youtube.com/@doctorbahaidar262"
                            target="_blank"
                        >
                            <FaYoutube size={30} />
                        </Link>
                        <Link
                            href="https://www.instagram.com/doctorbahaidar/"
                            target="_blank"
                        >
                            <FaInstagramSquare size={30} />
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default DropArticle;
