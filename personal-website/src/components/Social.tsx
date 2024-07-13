import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
	{
		icons: <FaGithub />,
		path: "https://github.com/AisyahAuliaAngelinee",
	},
	{
		icons: <FaLinkedinIn />,
		path: "https://www.linkedin.com/in/vincentius-clarishna/",
	},
	// {
	// 	icons: <FaInstagram />,
	// 	path: "",
	// },
];

interface socialsProp {
	icons: any;
	path: string;
}

const Social = ({ containerStyle, iconsStyle }: { containerStyle?: string; iconsStyle?: string }) => {
	return (
		<>
			<div className={containerStyle}>
				{socials.map((item: socialsProp, index: number) => {
					return (
						<>
							<Link href={item.path} target="_blank" rel="noopener noreferrer" key={index} className={iconsStyle}>
								{item.icons}
							</Link>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Social;
