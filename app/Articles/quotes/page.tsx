import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Layout from '@/components/Layout';
import QuotesHeader from '../QuotesHeader';

function page() {
    return (
        <div className="flex items-center text-black dark:text-white w-full min-h-screen mt-0">
            <Layout className="pt-0">
                <QuotesHeader />
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
                            QUOTE OF THE DAY
                        </h1>
                        <p className=" text-base font-medium py-4">
                            <FaQuoteLeft />
                            The best lessons are learned with a hungry stomach,
                            an empty wallet, and a broken heart; at this point,
                            you will understand the genuineness of your true
                            friends as well as who is with you and who is
                            against you.
                            <FaQuoteRight />
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default page;
