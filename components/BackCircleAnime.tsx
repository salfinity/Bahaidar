import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackCircleAnime({}: Props) {
    return (
        <motion.div className="min-h-screen flex justify-center px-16">
            <div className="relative w-full max-w-lg z-0">
                <div className="absolute top-0 -right-6 justify-center items-center w-72 h-72 bg-purple-300 rounded-full"></div>
                <div className="absolute top-0 justify-center items-center w-72 h-72 bg-yellow-300 rounded-full"></div>
                <div className="absolute top-40 -left-2 justify-center items-center w-72 h-72 bg-pink-300 rounded-full"></div>
            </div>
        </motion.div>
    );
}

export default BackCircleAnime;
