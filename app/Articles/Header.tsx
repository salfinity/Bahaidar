import React from 'react';
import Logo from '@/components/ui/Logo';
import { Link } from '@react-email/components';

const Header = () => {
    return (
        <header className="w-full fixed top-6 p-4 px-10 flex items-center justify-between ">
            <Logo />
            <nav
                className="w-max py-3 px-8 border border-solid border-black rounded-full font-medium text-capitalize flex items-center gap-4
             fixed right-1/2 translate-x-1/2 bg-slate-200/80 backdrop-blur-sm"
            >
                <Link href="/Articles" className="text-black dark:text-white">
                    Quotes
                </Link>
                <Link href="/Featured" className="text-black dark:text-white">
                    Featured
                </Link>
                <Link href="/Speeches" className="text-black dark:text-white">
                    Videos
                </Link>
            </nav>
            <div>Socials</div>
        </header>
    );
};

export default Header;
