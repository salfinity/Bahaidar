'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';

interface MovingImgProps {
    title: string;
    img: string;
    link: string;
}

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

const MovingImg: React.FC<MovingImgProps> = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef<HTMLImageElement | null>(null);

    function handleMouse(event: React.MouseEvent<HTMLAnchorElement>) {
        if (imgRef.current) {
            imgRef.current.style.display = 'inline-block';
            x.set(event.pageX);
            y.set(-5);
        }
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLAnchorElement>) {
        if (imgRef.current) {
            imgRef.current.style.display = 'none';
            x.set(0);
            y.set(0);
        }
    }
    return (
        <Link
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef}
                src={img}
                alt={title}
                width={400}
                height={400}
                className="z-10 w-96 h-auto hidden absolute rounded-lg"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw, 33vw"
            />
        </Link>
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
        <li className="col-span-4 md:col-span-1 w-full p-4 bg-white dark:bg-slate-900 border border-solid border-black dark:border-white rounded-2xl shadow-gray-400 dark:shadow-slate-600 shadow-lg">
            <Link
                href={link}
                target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    src={img}
                    alt={title}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    priority
                    sizes="(max-width:768px) 100vw,
                    (max-width:1200px) 50vw, 33vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-lg md:text-2xl font-bold text-black dark:text-white my-2 hover:underline">
                    {' '}
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2 text-black dark:text-white">{summary}</p>
            <span className="text-pink-400 font-semibold">{time}</span>
        </li>
    );
};

const AllArticles: React.FC<AllArticleProps> = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{
                y: 0,
                transition: { duration: 0.5, ease: 'easeInOut' }
            }}
            viewport={{ once: true }}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-white dark:bg-slate-900 text-lg md:text-xl  text-black dark:text-white first:mt-0 border border-solid border-black dark:border-white border-r-4 border-b-4
        "
        >
            <MovingImg title={title} img={img} link={link} />
            <span className="text-pink-400 font-semibold pl-4">{date}</span>
        </motion.li>
    );
};

const Articles = () => {
    return (
        <>
            <main className="mb-64 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center mt-96 md:mt-32 p-1 md:p-24">
                <div className="pt-16">
                    <h2 className="font-bold text-2xl md:text-4xl w-full text-center my-16 ">
                        FEATURED ARTICLES
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <FeaturedArticles
                            title="Communication Breakdown: Navigating Challenges The Path to Success: Navigating Life's Challenges in Marriage"
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
                            title="Navigating Financial Challenges The Path to Success: Navigating Life's Challenges in Marriage: A Guide to Financial Harmony"
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
                </div>
            </main>
            <main className="mb-16  mx-auto min-h-screen flex flex-col items-center justify-center mt-8 md:mt-8">
                <div className="pt-16">
                    <h2 className="font-bold text-2xl  md:text-4xl w-full text-center my-16 mt-32">
                        ALL ARTICLES
                    </h2>
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
                        date="December 16, 2023"
                        link="/"
                        img={'/animations/6.jpg'}
                    />
                    <AllArticles
                        title="The Path to Success: Navigating Life's Challenges The Path to Success: Navigating Life's Challenges"
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
