import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const ArticlesPage = () => {
    return (
        <div className="flex max-w-7xl mx-auto justify-center items-center text-black dark:text-white w-full min-h-screen mt-0">
            <div className="pt-0 md:pt-16 h-full inline-block z-0 ">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="w-full md:w-1/2 ">
                        <Image
                            priority
                            sizes="(max-width:768px) 100vw,
                            (max-width:1200px) 50vw, 33vw"
                            src={'/avatar.png'}
                            alt="Bahaidar"
                            className="w-full h-auto md:w-full"
                            width={450}
                            height={450}
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-0 md:p-16">
                        <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left justify-center py-4">
                            WORDS CAN CHANGE THE WORLD
                        </h1>
                        <p className=" text-sm md:text-base font-medium text-center md:text-left py-4">
                            <FaQuoteLeft className="text-left " />
                            Welcome to a world where words are not just
                            expressions; they are catalysts for transformation.
                            In the realm of our articles, we believe in the
                            profound impact that words can have. Words inspire,
                            motivate, educate, and wield the power to influence
                            change. Join me on this journey where the art of
                            language becomes a beacon for positive change and
                            enlightenment.
                            <FaQuoteRight className="text-right" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesPage;
