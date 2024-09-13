import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import 'dotenv/config'

const currentDir = dirname(fileURLToPath(import.meta.url))
const layersDir = process.env.ENVIRONMENT === 'development' ? '..' : './node_modules/@thewebchimp/chimp-nuxt-layer'

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
					additionalData: `@import "${ layersDir }/assets/styles/variables.sass"\nbody\n\tmargin: 0`,
				},
			}
		}
	}
})