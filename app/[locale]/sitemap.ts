import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { routing } from '@/i18n/routing'
import { portfolioProjects } from '@/lib/data/portfolio'
import { services } from '@/lib/data/services'
import { products } from '@/lib/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = site.baseUrl
    const lastModified = new Date()

    const staticPaths = ['', '/services', '/projects', '/products', '/contact']
    const dynamicPaths = [
        ...services.map((s) => `/services/${s.slug}`),
        ...portfolioProjects.map((p) => `/projects/${p.key}`),
        ...products.map((p) => `/products/${p.slug}`),
    ]

    return [...staticPaths, ...dynamicPaths].flatMap((path) =>
        routing.locales.map((locale) => ({
            url: `${baseUrl}/${locale}${path}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: path === '' ? 1 : 0.7,
        }))
    )
}
