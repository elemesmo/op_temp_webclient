export default (direction = 'left', density = 80, d_value_area = 650, mass_absorver = 10) => {
	return {
		fps_limit: 60,
		interactivity: {
			detect_on: 'canvas',
			events: {
				onclick: { enable: true, mode: 'attract' },
				onhover: {
					enable: true,
					mode: 'attract',
					parallax: { enable: true, force: 50, smooth: 55 }
				},
				resize: true
			},
			modes: {
				push: { quantity: 1 },
				attract: { distance: 180, duration: 4, factor: 0.13 },
				slow: { radius: 180, factor: 1.2 }
			}
		},
		particles: {
			color: { value: '#405E78' },
			line_linked: {
				color: '#405E78',
				distance: 170,
				enable: true,
				opacity: 0.8,
				width: 0.6
			},
			move: {
				attract: { enable: false },
				bounce: false,
				direction,
				enable: true,
				speed: 0.3,
				outModes: {
					bottom: 'out',
					left: 'out',
					right: 'out',
					top: 'out'
				}
			},
			number: { density: { enable: true, value_area: d_value_area }, value: density },
			opacity: {
				random: true,
				value: 0.8
			},
			shape: {
				polygon: { nb_sides: 3 },
				type: 'polygon'
			},
			size: {
				random: true,
				value: 5
			}
		},
		retina_detect: true
		// absorbers: [{
		// 	color: {
		// 		value: '#14131b'
		// 	},
		// 	draggable: false,
		// 	opacity: 0,
		// 	destroy: true,
		// 	orbits: false,
		// 	size: {
		// 		random: {
		// 			enable: false,
		// 			minimumValue: mass_absorver
		// 		},
		// 		value: {
		// 			min: mass_absorver,
		// 			max: mass_absorver
		// 		},
		// 		density: mass_absorver,
		// 		limit: {
		// 			radius: mass_absorver,
		// 			mass: 0.1
		// 		}
		// 	},
		// 	position: {
		// 		x: 50,
		// 		y: 30
		// 	}
		// }]
	};
};
