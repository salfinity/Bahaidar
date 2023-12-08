'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import {
    FaInstagramSquare,
    FaTiktok,
    FaWhatsappSquare,
    FaYoutube
} from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import bahaidarImg from '@/public/hero.jpg';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [text, count] = useTypewriter({
        words: [
            'Philosopher of Management Brilliance',
            'Global Luminary and Thought Provoker',
            'Verbal Virtuoso',
            'Maestro of Multifaceted Mastery'
        ],
        loop: true,
        delaySpeed: 2000
    });

    return (
        <section
            ref={ref}
            id="home"
            className="max-w-7xl mb-28 md:mb-40 flex flex-col items-center space-y-2 justify-center text-center sm:mb-0 scroll-mt-[100rem] h-screen overflow-hidden"
        >
            <BackgroundCircles />
            <div className="flex items-center justify-center max-w-6xl z-50">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2
                        }}
                    >
                        <Image
                            src={bahaidarImg}
                            alt="Bahaidar portrait"
                            width="250"
                            height="250"
                            quality="100"
                            priority={true}
                            className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl z-50"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.h2
                className="px-4 text-2xl uppercase font-thin tracking-[15px] !leading-[1.5] sm:text-4xl z-50"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="underline-none">Dr.Mohamed Bahaidar</span>
                <Cursor cursorColor="#000000" />
            </motion.h2>

            <motion.h1
                className="px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl z-50 overflow-hidden"
                style={{ height: '3em' }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="underline-none">{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </motion.h1>

            <motion.h3
                className=" px-4 text-xl uppercase font-thin !leading-[1.5] sm:text-2xl z-50"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="underline-none">
                    <a href="https://iqrafm.com">CEO IQRAFM</a>| AUTHOR &
                    SCHOLAR | BUSINESS CONSULTANT | PUBLIC SPEAKER
                </span>
                <Cursor cursorColor="#000000" />
            </motion.h3>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium z-50"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition z-50"
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{' '}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 z-50"
                    href="/CV.pdf"
                    download
                >
                    Download CV{' '}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <motion.div className="flex sm:flex-col md:flex-row gap-4">
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-4 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-50"
                        href="https://ke.linkedin.com/in/dr-mohamed-bahaidar-73527313a/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>

                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-4 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-50"
                        href="https://www.instagram.com/doctorbahaidar/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                        target="_blank"
                    >
                        <FaInstagramSquare />
                    </a>

                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-4 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-50"
                        href="https://www.youtube.com/@dr.mbahaidar2308"
                        target="_blank"
                    >
                        <FaYoutube />
                    </a>

                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-4 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-50"
                        href="https://www.tiktok.com/@doctor_bahaidar"
                        target="_blank"
                    >
                        <FaTiktok />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
