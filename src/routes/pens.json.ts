export const get = async (): Promise<{ body: { pens: PensList } }> => {
	const pens = [
		{ 
			title: 'A thought about SVG icons and React.', 
			url: 'https://codepen.io/elemesmo/pen/YavRXr', 
			thumb: 'pens/YavRXr-512.jpg', 
			likes: 0, 
			comments: 0, 
			views: 22 
		},
		{ 
			title: 'Just random is not so random.', 
			url: 'https://codepen.io/elemesmo/pen/QmrRwm', 
			thumb: 'pens/QmrRwm-512.jpg', 
			likes: 0, 
			comments: 0, 
			views: 16 
		},
		{ 
			title: 'SVG stroke-dashoffset trick.', 
			url: 'https://codepen.io/elemesmo/pen/QmBQQm', 
			thumb: 'pens/QmBQQm-512.jpg', 
			likes: 0, 
			comments: 0, 
			views: 24 
		},
		{ 
			title: 'Trigronometry Offset on Circles.', 
			url: 'https://codepen.io/elemesmo/pen/wjeKLg', 
			thumb: 'pens/wjeKLg-512.jpg', 
			likes: 0, 
			comments: 0, 
			views: 58 
		},
	];
	return { body: { pens } };
};
