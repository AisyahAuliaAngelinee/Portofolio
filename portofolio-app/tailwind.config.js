/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				mont: ["var(--font-mont)"],
			},
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#B63E96", // 240,86,199
				primaryDark: "#58E6D9", // 80,230,217
			},
			animation: {
				"spin-slow": "spin 50s linear infinite",
			},
		},
	},
	plugins: [],
};
