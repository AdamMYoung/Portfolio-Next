/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Source Code Pro', 'sans-serif'],
                serif: [],
            },
            keyframes: {
                burn: {
                    '0%': {
                        textShadow:
                            '0 0 2px #fefcc9, 1px -1px 3px #feec85, -2px -2px 4px #ffae34, 2px -4px 5px #ec760c, -2px -6px 6px #cd4606, 0 -8px 7px #973716, 1px -9px 8px #451b0e',
                    },
                    '100%': {
                        textShadow:
                            '0 0 2px #fefcc9, 1px -1px 3px #fefcc9, -2px -2px 4px #feec85, 2px -4px 6px #ffae34,-2px -5px 5px #ec760c, 0 -8px 8px #cd4606, 1px -9px 8px #973716',
                    },
                },
            },
            animation: {
                burn: 'burn 1s ease-in-out infinite alternate',
                fire: 'burn 0.65s ease-in-out infinite alternate',
            },
        },
    },
    plugins: [],
};
