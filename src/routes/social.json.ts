export const get = async (): Promise<{ body: { social: SocialMenu } }> => {
	const social = [
		{ title: 'Mail', icon: 'Mail', path: '#' },
		{ title: 'Instagram', icon: 'Instagram', path: '#' },
		{ title: 'Linkedin', icon: 'Linkedin', path: '#' },
		{ title: 'Codepen', icon: 'Codepen', path: '#' },
		{ title: 'Github', icon: 'Github', path: '#' },
		{ title: 'Rarible', icon: 'Rarible', path: '#' }
	];
	return { body: { social } };
};
