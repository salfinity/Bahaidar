/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            }
        }
    },
    plugins: [],
    darkMode: 'class'
};

// screens: {
//  {/* '2xl': { max: '1535' },
// => @media (max-width: 1535px) { ... }

//   xl: { max: '1279' },
// => @media (max-width: 1279px) { ... }

// lg: { max: '1023' },
// => @media (max-width: 1023px) { ... }

// md: { max: '767' },
// => @media (max-width: 767px) { ... }

//  sm: { max: '639' },
// => @media (max-width: 639px) { ... }

// xs: { max: '479' }
// => @media (max-width: 479px) { ... }
