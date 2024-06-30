import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const outfit = Outfit({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], variable: "--font-outfit" });

export const metadata: Metadata = {
	title: "Portofolio.",
	description: "Vincentius Clarishna Personal Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={outfit.variable}>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
