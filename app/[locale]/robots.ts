import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://nojeed.vercel.app'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: [`${baseUrl}/en/sitemap.xml`, `${baseUrl}/ar/sitemap.xml`],
    }
}
