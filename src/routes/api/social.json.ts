export const get = async (): Promise<{ body: { social: SocialMenu } }> => {
	const social = [
		{ title: 'Mail', icon: 'Mail', path: 'mailto:rafa@garrido.ninja' },
		{ title: 'Linkedin', icon: 'Linkedin', path: 'https://linkedin.com/in/ragarrido' },
		{ title: 'Instagram', icon: 'Instagram', path: 'https://instagram.com/itadakimiausu' },
		{ title: 'Codepen', icon: 'Codepen', path: 'https://codepen.io/elemesmo' },
		{ title: 'Github', icon: 'Github', path: 'https://github.com/elemesmo' },
		{ title: 'Rarible', icon: 'Rarible', path: 'https://rarible.com/binaremirage' }
	];
	return { body: { social } };
};
