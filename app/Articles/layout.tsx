import { Inter } from 'next/font/google';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import DropArticle from './DropArticle';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className=" bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100  ">
                <GoogleAnalytics />

                <ThemeContextProvider>
                    {children}
                    <ThemeSwitch />
                    <DropArticle />
                </ThemeContextProvider>
            </body>
        </html>
    );
}
