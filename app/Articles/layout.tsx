import { Inter } from 'next/font/google';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import DropdownMenu from '@/components/dropdown-menu';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ArticleButton from '@/components/ArticleButton';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className=" bg-[url('/animations/8.jpg')] bg-cover bg-center text-slate-950 dark:text-slate-100  ">
                <GoogleAnalytics />

                <ThemeContextProvider>
                    {children}
                    <ThemeSwitch />
                    {/* <DropdownMenu /> */}
                </ThemeContextProvider>
            </body>
        </html>
    );
}
