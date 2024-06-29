import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: "--font-jetBrainsMono" });

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
			<body className={jetBrainsMono.variable}>
				<Header />
				{children}
			</body>
		</html>
	);
}
