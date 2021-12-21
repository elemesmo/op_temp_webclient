/** Nav Item object */
interface NavItem {
	path: string;
	title: string;
	icon: string;
}

interface NavMenu {
	left: Array<NavItem>;
	right: Array<NavItem>;
}
