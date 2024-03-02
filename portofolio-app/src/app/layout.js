import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
	title: "Portofolio",
	description: "Personal Portofolio Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
