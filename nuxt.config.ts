// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
	typescript: {
		strict: true,
	},
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
});
