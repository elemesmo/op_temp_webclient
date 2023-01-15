import path from 'path';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$styles: path.resolve('src/styles'),
					$stores: path.resolve('src/stores')
				}
			}
		}
	}
};

export default config;
