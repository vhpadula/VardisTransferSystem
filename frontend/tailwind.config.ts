import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/styles/**/*.{css,scss,sass}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                goldenrod: "#f9b234",
            },
            spacing: {},
            fontFamily: {
                arial: "Arial",
            },
        },
        fontFamily: {
            hegemony: ["Hegemony", "sans-serif"],
        },
    },
    plugins: [],
};
export default config;
