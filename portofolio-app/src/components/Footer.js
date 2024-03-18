import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
				<Layout className="py-8 flex items-center justify-between">
					<span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
					<div className="flex items-center">
						Build with <span className="font-bold">&nbsp;NextJS&nbsp;</span> by&nbsp;
						<Link href={"/"} className="underline underline-offset-2">
							Vincentius Clarishna
						</Link>
					</div>
					<Link href={"/"}>Personal Portofolio</Link>
				</Layout>
			</footer>
		</>
	);
};

export default Footer;
