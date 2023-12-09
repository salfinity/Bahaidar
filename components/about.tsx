'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useTypewriter } from 'react-simple-typewriter';
import { AiFillProfile } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export default function About() {
    const { ref } = useSectionInView('About');
    const [text, count] = useTypewriter({
        words: ['Maestro of Multifaceted Mastery'],
        loop: true,
        delaySpeed: 2000
    });
    const router = useRouter();

    const handleMoreClick = () => {
        router.push('/MoreAbout');
    };

    return (
        <>
            <h2 className="uppercase text-3xl tracking-[20px] text-center mx-auto">
                About
            </h2>
            <motion.section
                className="max-w-6xl flex flex-col relative h-screen text-center md:text-left md:flex-row px-8 justify-evenly items-center mt-14 mb-28 "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 }}
                ref={ref}
                id="about"
            >
                <motion.img
                    initial={{
                        x: -200
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src="/pic10.jpeg"
                    height={560}
                    width={460}
                    className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[500px]"
                />

                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-3xl mt-10 font-semibold">
                        Here is a{' '}
                        <span className="underline decoration-[#F7AB0A]/50">
                            little
                        </span>{' '}
                        background
                    </h4>
                    <p className="text-sm">
                        A seasoned visionary and catalyst for positive change.
                        With a Ph.D. in Management, my journey has unfolded over
                        14 years as the helm of DOCTOR B Consultancy Ltd, where
                        I transcend conventional business boundaries to address
                        societal challenges globally. As an author of five
                        impactful books, I delve into psychology, sociology, and
                        life's complexities. A dynamic public speaker, I have
                        engaged with diverse audiences, offering insights honed
                        through research into over 2,000 books. From counseling
                        roles in Zanzibar to managerial prowess at Iqra FM
                        Kenya, my influence spans continents. Recognized with
                        the Meena Personal Brand Award in Oman, I am celebrated
                        as a convergent thinker in social and business domains.
                        Join me on a transformative journey, where strategic
                        management meets compassionate leadership, and together,
                        we explore new horizons of growth and understanding.
                    </p>
                    <button
                        className=" bg-white px-3 gap-2  h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
                        border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 
                        shadow-lg rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 
                        transition-all dark:bg-gray-950"
                        style={{ animation: 'none' }}
                        onClick={handleMoreClick}
                    >
                        <AiFillProfile size={30} /> Know me Better
                    </button>
                </div>
            </motion.section>
        </>
    );
}
