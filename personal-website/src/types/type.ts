export type stackProps = {
	icon: any;
	name: string;
};

export type projectProps = {
	num: string;
	category: string;
	title: string;
	description: string;
	stack: stackProps[];
	image: any;
	link: string;
	github: string;
};
