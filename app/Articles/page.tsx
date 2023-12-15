import Link from 'next/link';
import React from 'react';
import { FaPenAlt, FaQuoteLeft } from 'react-icons/fa';
import { LiaFileVideoSolid } from 'react-icons/lia';

const page = () => {
    return (
        <div className="justify-center flex flex-col gap-4 items-center text-center min-h-screen mx-auto  bg-[url('/animations/8.jpg')] bg-cover bg-center">
            <div
                className="text-3xl font-semibold bg-white  px-6 py-2 gap-4 text-slate-950 dark:text-slate-100  h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
      border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 shadow-lg rounded-full flex 
      items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            >
                <Link href="/Articles/quotes">Quotes</Link>{' '}
                <FaQuoteLeft size={30} />
            </div>
            <div
                className="text-3xl font-semibold bg-white px-6 py-2 gap-4 text-slate-950 dark:text-slate-100  h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
      border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 shadow-lg rounded-full flex 
      items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            >
                <Link href="/Articles/articles">Articles</Link>
                <FaPenAlt size={30} />
            </div>
            <div
                className="text-3xl font-semibold bg-white px-6 py-2 gap-4 text-slate-950 dark:text-slate-100  h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
      border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 shadow-lg rounded-full flex 
      items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            >
                <Link href="/Articles/videos">Videos</Link>
                <LiaFileVideoSolid size={30} />
            </div>
        </div>
    );
};

export default page;
