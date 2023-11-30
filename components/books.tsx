'use client';

import { booksData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Books({}: Props) {
    const { ref } = useSectionInView('Books');
    const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            ref={ref}
            id="books"
            className="flex flex-col w-full text-center sm:mb-16"
        >
            <h2 className="mt-28 uppercase text-3xl tracking-[14px]">Books</h2>

            <div
                className="max-w-full flex overflow-x-scroll py-4 overflow-y-hidden  snap-x
    snap-mandatory"
            >
                {booksData.map((book, index) => (
                    <div
                        key={index}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{
                                opacity: 0,
                                y: -200
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={book.imageUrl.src} // Use the imageUrl from the book object
                            alt="" // Use the title as alt text
                            width={200}
                            height={200}
                        />

                        <div className="space-y-6 px-0 md:px-6 max-w-7xl">
                            <h4 className="text-2xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Book {index + 1} of {booksData.length}:
                                </span>{' '}
                                {book.title}
                            </h4>

                            <p className="text-sm text-center md:text-left">
                                {book.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden w-full absolute top-[30%] bg-[#ff0000]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
}
