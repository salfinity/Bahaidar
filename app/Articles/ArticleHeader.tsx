import React from 'react';
import Logo from '@/components/ui/Logo';
import Link from 'next/link';
import TwitterXImg from '/public/twitter.png';
import { FaInstagramSquare, FaTiktok, FaYoutube } from 'react-icons/fa';

const ArticleHeader = () => {
    return (
        <header className="z-50 w-full fixed top-6 p-4 px-10 flex items-center justify-between">
            <Logo />
            <nav
                className="w-max py-3 px-8 border border-solid border-black rounded-full font-medium text-capitalize flex items-center gap-4
             fixed right-1/2 translate-x-1/2 bg-slate-200/80 backdrop-blur-sm"
            >
                <Link href="/All" className="text-black dark:text-white">
                    All
                </Link>
                <Link href="/Featured" className="text-black dark:text-white">
                    Featured
                </Link>
                <Link href="/Categories" className="text-black dark:text-white">
                    Categories
                </Link>
            </nav>
            <nav className="flex items-center gap-4 cursor-pointer ml-auto">
                <Link href="https://twitter.com/dr_m_bahaidar/" target="_blank">
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
        </header>
    );
};

export default ArticleHeader;
