"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		id: 1,
		name: "home",
		path: "/",
	},
	{
		id: 2,
		name: "services",
		path: "/services",
	},
	{
		id: 3,
		name: "resume",
		path: "/resume",
	},
	{
		id: 4,
		name: "work",
		path: "/work",
	},
	{
		id: 5,
		name: "contact",
		path: "/contact",
	},
];

interface linksProp {
	id: number;
	name: string;
	path: string;
}

function Navbar() {
	const pathname = usePathname();
	// console.log("Pathname: ", pathname);

	return (
		<>
			<nav style={{ userSelect: "none" }} className="flex gap-8">
				{links.map((item: linksProp) => {
					return (
						<>
							<Link
								key={item.id}
								href={item.path}
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
