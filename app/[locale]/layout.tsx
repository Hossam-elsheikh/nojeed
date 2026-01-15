import { Locale, routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Cairo } from 'next/font/google'
import './globals.css'
import NewNavbar from '@/components/navbar/NewNavbar'
import ChessStoryHero from '@/components/hero/ChessStoryHero'
import WhyNojeed from '@/components/WhyNojeed/WhyNojeed'
import Footer from '@/components/Footer/Footer'
import Portfolio from '@/components/Portfolio/Portfolio'
import ContactUs from '@/components/ContactUs/ContactUs'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'

const cairo = Cairo({
    variable: '--font-cairo',
    subsets: ['arabic', 'latin'],
    weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
    title: 'Nojeed',
    description: 'Build real softwares',
    openGraph: {
        images: [
            {
                url: '/opengraph-image',
            },
        ],
    },
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: Locale }> // Changed to Promise
}>) {
    const { locale } = await params
    if (!routing.locales.includes(locale as Locale)) {
        notFound()
    }
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages()
    return (
        <html dir={locale === 'ar' ? 'rtl' : 'ltr'} lang={locale}>
            <body className={`${cairo.variable} antialiased `}>
                <NextIntlClientProvider messages={messages}>
                    <main className="relative">
                        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 pt-6 z-50">
                            <NewNavbar />
                        </div>
                        <ChessStoryHero />
                        <div className="relative z-20">{children}</div>
                        <WhyNojeed />
                        <div className="flex flex-col pb-20 w-full lg:w-[90%] px-5 mx-auto">
                            {' '}
                            <Portfolio />
                            <ContactUs />
                            {/* <Testimonials /> */}
                        </div>
                        <Footer />
                    </main>
                </NextIntlClientProvider>
                <GoogleAnalytics gaId="G-DN043C7PX2" />
                <Analytics />
            </body>
        </html>
    )
}
