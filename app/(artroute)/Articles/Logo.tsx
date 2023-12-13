import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-black">
            <div className="w-32 h-auto">
                <Image
                    src="/logoarticle.png"
                    alt="logo"
                    className="w-full h-auto"
                    width={100}
                    height={100}
                />
            </div>
        </Link>
    );
};

export default Logo;
