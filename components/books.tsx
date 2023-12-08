'use client';

import { booksData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function Books({}: Props) {
    const { ref } = useSectionInView('Books');

    return (
        <>
            <h2 className="uppercase text-3xl tracking-[20px] text-center mx-auto">
                Books
            </h2>
            <motion.div
                ref={ref}
                className="w-full flex flex-col relative h-screen text-center md:text-left md:flex-row px-8 justify-evenly items-center mt-8 mb-28 "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.175 }}
                id="books"
            >
                <div className="max-w-full flex overflow-x-scroll py-4 overflow-y-scroll md:overflow-y-scroll  snap-x snap-mandatory">
                    {booksData.map((book, index) => (
                        <div
                            key={index}
                            className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row items-center justify-center p-4 md:p-44 h-screen"
                        >
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: -200
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={book.imageUrl} // Use the imageUrl from the book object
                                alt="" // Use the title as alt text
                                width={200}
                                height={200}
                                className="mb-22 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-md object-cover md:rounded-lg xl:w-[300px] xl:h-[400px] hidden md:flex"
                            />
                            <div className="space-y-6 px-0 md:px-6 max-w-8xl">
                                <div className="ml-12 items-center justify-center">
                                    <img
                                        src={book.titleImageUrl} // Use the imageUrl from the book object
                                        alt="" // Use the title as alt text
                                        width={45}
                                        height={30}
                                        className="mb-8 mt-24 md:mb-0 flex-shrink-0 w-full h-1/4  object-cover "
                                    />
                                </div>

                                <p
                                    className="text-sm text-center grow h-3/4 md:text-left"
                                    style={{ maxHeight: '500px' }}
                                >
                                    {book.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hidden w-full absolute top-[30%] bg-[#ff0000]/10 left-0 h-[500px] -skew-y-12" />
            </motion.div>
        </>
    );
}

{
    /*  <motion.div
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
*/
}
