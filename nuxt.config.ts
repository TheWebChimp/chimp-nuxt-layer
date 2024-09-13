import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [ join(currentDir, './assets/styles/main.scss') ],
	modules: [
		'nuxt-icon',
		'nuxt-svgo',
		'@pinia/nuxt'
	],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: '@import "./layers/quantum-base/assets/styles/variables.sass"\nbody\n\tmargin: 0',
				},
			}
		}
	}
})