'use client';

import { MdArticle } from 'react-icons/md';

const ArticleButton = () => {
    return (
        <button
            className="fixed z-50 bottom-5 md:top-5 left-5 bg-white px-3 gap-2  h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
      border border-white border-opacity-40 shadow-slate-900 dark:shadow-slate-800 shadow-lg rounded-full flex 
      items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            style={{ animation: 'none' }}
        >
            <MdArticle size={30} /> Articles
        </button>
    );
};

export default ArticleButton;
