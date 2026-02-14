import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: 'page',
			source: '**',
		}),
		blog: defineCollection({
			type: 'page',
			source: 'blog/*.md',
			schema: z.object({ data: z.string() })
		})
	},
})
