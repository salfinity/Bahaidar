'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AllArticleProps {
    img: string;
    title: string;
    date: string;
    link: string;
}

interface FeaturedArticleProps {
    img: string;
    title: string;
    time: string;
    summary: string;
    link: string;
}

const FramerImage = motion(Image);

const AllArticles: React.FC<AllArticleProps> = ({ img, title, date, link }) => {
    return (
        <li
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-white text-black first:mt-o border border-solid border-black border-r-4 border-b-4
        "
        >
            <Link href={link} target="_blank">
                <h2 className="capitalize text-xl font-semibold hover:underline">
                    {title}
                </h2>
            </Link>
            <span>{date}</span>
        </li>
    );
};

const FeaturedArticles: React.FC<FeaturedArticleProps> = ({
    img,
    title,
    time,
    summary,
    link
}) => {
    return (
        <li className="col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl shadow-gray-400 shadow-lg">
            <Link
                href={link}
                target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img}
                    alt={title}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold dark:text-black my-2 hover:underline">
                    {' '}
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2 dark:text-black">{summary}</p>
            <span className="text-pink-400 font-semibold">{time}</span>
        </li>
    );
};
const Articles = () => {
    return (
        <>
            <main className="mb-16 max-w-7xl mx-auto h-screen flex flex-col items-center justify-center mt-32 p-24">
                <div className="pt-16">
                    <h2 className="font-bold text-4xl w-full text-center my-16 ">
                        FEATURED ARTICLES
                    </h2>
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticles
                            title="Communication Breakdown: Navigating Challenges in Marriage"
                            summary="This article delves into the crucial role of communication in marital relationships, 
                            highlighting common pitfalls that can lead to breakdowns. From exploring the impact of misunderstandings 
                            to offering practical tips on fostering open dialogue, the piece provides insights for couples to navigate
                             communication challenges effectively. Readers will gain valuable tools to recognize detrimental patterns
                              and enhance their connection through improved communication skills, fostering a stronger and healthier marriage."
                            time=" 5 to 7 minutes read"
                            link="/"
                            img={'/animations/2.jpg'}
                        />
                        <FeaturedArticles
                            title="Navigating Financial Challenges in Marriage: A Guide to Financial Harmony"
                            summary="Addressing the often sensitive topic of finances in marriage, this article serves as a guide to help 
                            couples manage financial challenges and cultivate harmony. It emphasizes the importance of joint financial planning,
                            setting shared goals, and maintaining open communication about money matters. With practical advice on budgeting and 
                            navigating differing spending habits, the article empowers couples to align their financial values and work together 
                            towards a secure and fulfilling financial future. By fostering teamwork and transparency, couples can strengthen 
                            their relationship while effectively facing the challenges of managing finances within a marriage."
                            time="6 to 8 minutes read"
                            link="/"
                            img={'/animations/6.jpg'}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        ALL ARTICLES
                    </h2>
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                </div>
            </main>
        </>
    );
};

export default Articles;
