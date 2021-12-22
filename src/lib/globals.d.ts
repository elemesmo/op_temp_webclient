/** Nav Item object */
interface NavItem {
	path: string;
	title: string;
	icon: string;
}

/** nav menu structure */
interface NavMenu {
	left: Array<NavItem>;
	right: Array<NavItem>;
}

/** nav.json get params */
interface GetNavParams {
	params: {
		hobo: boolean;
	};
}
