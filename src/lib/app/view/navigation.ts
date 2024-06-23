import { FileSearchIcon, FilesIcon, FileStackIcon, UsersIcon } from 'lucide-svelte';

type NavPage = {
	type: 'page';
	href: string;
	label: string;
	icon: typeof FileStackIcon;
};

type NavSection = {
	type: 'section';
	id: string;
	label: string;
	links: {
		href: string;
		label: string;
	}[];
	icon: typeof FileStackIcon;
};

export const navItems: (NavSection | NavPage)[] = [
	{
		type: 'page',
		label: '見積',
		icon: FileStackIcon,
		href: '/search'
	},
	{
		type: 'page',
		label: '資料を探す',
		icon: FileSearchIcon,
		href: '/docs/search'
	},
	{
		type: 'page',
		label: '資料管理',
		icon: FilesIcon,
		href: '/docs/manage'
	},
	{
		type: 'page',
		label: 'ユーザー管理',
		icon: UsersIcon,
		href: '/users/manage'
	}
];
