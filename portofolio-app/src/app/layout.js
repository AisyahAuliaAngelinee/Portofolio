import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
	title: "Portofolio",
	description: "Personal Portofolio Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${mont.variable}`}>
			<body className={mont.className}>{children}</body>
		</html>
	);
}
