"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

interface navProps {
	name: string;
	path: string;
}

const MobileNavbar = () => {
	const pathname = usePathname();

	return (
		<>
			<Sheet>
				<SheetTrigger className="flex justify-center items-center">
					<CiMenuFries className="text-[32px] text-accent" />
				</SheetTrigger>
				<SheetContent className="flex flex-col">
					{/* Logo */}
					<div>Logo</div>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileNavbar;
