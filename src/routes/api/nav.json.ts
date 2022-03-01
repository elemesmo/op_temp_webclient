export const get = async (): Promise<{ body: { nav: NavMenu } }> => {
	const left = [
		{ path: '/', title: 'home', icon: '' },
		{ path: '/about', title: 'about', icon: 'About' }
	];
	const right = [
		{ path: '/drops', title: 'drops', icon: 'Drops' },
		{ path: '/status', title: 'status', icon: 'Status' }
	];
	return { body: { nav: { left, right } } };
};
