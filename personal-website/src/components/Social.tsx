import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
	{
		icons: <FaGithub />,
		path: "",
	},
	{
		icons: <FaLinkedinIn />,
		path: "",
	},
	{
		icons: <FaInstagram />,
		path: "",
	},
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
							<Link href={item.path} key={index} className={iconsStyle}>
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
