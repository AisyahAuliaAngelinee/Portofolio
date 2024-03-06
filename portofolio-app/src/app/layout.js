import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
	title: "V.Clarishna Portofolio",
	description: "Vincentius Clarishna Personal Portofolio Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
			<body className={montserrat.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
