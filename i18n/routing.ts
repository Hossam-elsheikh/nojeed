import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
    localeDetection: true,
    localePrefix: 'always',
    pathnames: {
        '/': {
            en: '/',
            ar: '/',
        },
        '/services': {
            en: '/services',
            ar: '/services',
        },
        '/services/[slug]': {
            en: '/services/[slug]',
            ar: '/services/[slug]',
        },
        '/projects': {
            en: '/projects',
            ar: '/projects',
        },
        '/projects/[slug]': {
            en: '/projects/[slug]',
            ar: '/projects/[slug]',
        },
        '/products': {
            en: '/products',
            ar: '/products',
        },
        '/products/[slug]': {
            en: '/products/[slug]',
            ar: '/products/[slug]',
        },
        '/contact': {
            en: '/contact',
            ar: '/contact',
        },
        '/terms': {
            en: '/terms',
            ar: '/terms',
        },
        '/privacy': {
            en: '/privacy',
            ar: '/privacy',
        },
    },
})

export type Locale = (typeof routing.locales)[number]
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
