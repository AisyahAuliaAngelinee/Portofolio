import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<>
			<header className="w-full px-32 py-8 font-medium flex items-center justify-between">
				<nav>
					<Link href={"/"}>Home</Link>
					<Link href={"/about"}>About</Link>
					<Link href={"/projects"}>Projects</Link>
					<Link href={"/articles"}>Articles</Link>
				</nav>
				<Logo />
				<nav>
					<Link href={"/"} target={"_blank"}>
						LinkedIn
					</Link>
					<Link href={"/"} target={"_blank"}>
						Github
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
