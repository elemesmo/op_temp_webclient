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

/** pen item structure */
interface PenItem {
	title: string;
	url: string;
	thumb: string;
	likes: number;
	comments: number;
	views: number;
}

/** social menu structure */
type SocialMenu = Array<NavItem>;

/** pens list structure */
type PensList = Array<PenItem>;

/** motion device object */
interface MotionStatus {
	x: number;
	y: number;
	support: boolean;
}