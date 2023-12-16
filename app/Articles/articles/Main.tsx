import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import ArticleHeader from '../ArticleHeader';

const ArticlesPage = () => {
    return (
        <div className="flex max-w-7xl mx-auto items-center text-black dark:text-white w-full min-h-screen mt-0">
            <div className="pt-0  h-full inline-block z-0 mt-0 ">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2 p-16">
                        <Image
                            src={'/avatar.png'}
                            alt="Bahaidar"
                            className="w-full h-auto"
                            width={450}
                            height={450}
                        />
                    </div>
                    <div className="w-1/2 p-16">
                        <h1 className="text-6xl font-bold text-left justify-center py-4">
                            WORDS CAN CHANGE THE WORLD
                        </h1>
                        <p className=" text-base font-medium py-4">
                            <FaQuoteLeft />
                            Welcome to a world where words are not just
                            expressions; they are catalysts for transformation.
                            In the realm of our articles, we believe in the
                            profound impact that words can have. Words inspire,
                            motivate, educate, and wield the power to influence
                            change. They are not merely a means of
                            communication; they are a force for good, capable of
                            driving positive transformations in individuals,
                            communities, and societies at large. As you delve
                            into our articles, explore the myriad ways in which
                            words have the potential to change the world, one
                            thought-provoking piece at a time. Join us on this
                            journey where the art of language becomes a beacon
                            for positive change and enlightenment.
                            <FaQuoteRight />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesPage;
