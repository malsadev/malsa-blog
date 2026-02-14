// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
	],
	content: {
		build: {
			markdown: {
				// rehypePlugins: {},
				remarkPlugins: {
					// Here just for override
					// 'remark-gfm': {
					// 	options: {
					// 		emoticon: true
					// 	}
					// },
					// 'remark-tok': {},
					// 'remark-oembed': {},
					'remark-math': {}
				},
				rehypePlugins: {
					'rehype-katex': {},
					'rehype-mathjax': {}
				}
			}
		}
	},
	devtools: { enabled: true },
	compatibilityDate: '2024-04-03',
})
