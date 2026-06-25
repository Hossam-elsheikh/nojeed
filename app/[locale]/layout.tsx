import { Locale, routing } from '@/i18n/routing'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Cairo, Space_Grotesk, Spectral } from 'next/font/google'
import './globals.css'
import { Header } from '@/sections/Header'
import { Footer } from '@/sections/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { site } from '@/lib/site'

const cairo = Cairo({
    variable: '--font-cairo',
    subsets: ['arabic', 'latin'],
    weight: ['400', '500', '700'],
})

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const spectral = Spectral({
    variable: '--font-spectral',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
})

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'seo' })

    return {
        metadataBase: new URL(site.baseUrl),
        title: {
            default: t('title'),
            template: `%s | ${site.name}`,
        },
        description: t('description'),
        alternates: {
            languages: { en: '/en', ar: '/ar' },
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            images: [{ url: '/opengraph-image' }],
        },
    }
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: Locale }>
}>) {
    const { locale } = await params
    if (!routing.locales.includes(locale as Locale)) {
        notFound()
    }
    const messages = await getMessages()

    return (
        <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale}>
            <body className={`${cairo.variable} ${spaceGrotesk.variable} ${spectral.variable} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
                <GoogleAnalytics gaId={site.gaId} />
                <Analytics />
            </body>
        </html>
    )
}
