"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "services",
		path: "/services",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "work",
		path: "/work",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

interface linksProp {
	name: string;
	path: string;
}

function Navbar() {
	const pathname = usePathname();
	// console.log("Pathname: ", pathname);

	return (
		<>
			<nav style={{ userSelect: "none" }} className="flex gap-8">
				{links.map((item: linksProp, idx: number) => {
					return (
						<>
							<Link
								href={item.path}
								key={idx}
								className={`${item.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
								{item.name}
							</Link>
						</>
					);
				})}
			</nav>
		</>
	);
}

export default Navbar;
