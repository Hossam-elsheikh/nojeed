import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { products } from '@/lib/data/products'
import { NabihProduct } from '@/sections/products/NabihProduct'
import { School360Product } from '@/sections/products/School360Product'

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const product = products.find((p) => p.slug === slug)
    if (!product) return {}
    const t = await getTranslations('productsPage')
    return {
        title: t(`cards.${product.key}.name`),
        description: t(`cards.${product.key}.description`),
    }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const index = products.findIndex((p) => p.slug === slug)
    const product = products[index]
    if (!product) notFound()

    const next = products[(index + 1) % products.length]
    const locale = await getLocale()
    const nextProduct = next.key === product.key ? null : <NextProductLink slug={next.slug} productKey={next.key} />

    return product.key === 'nabih' ? (
        <NabihProduct locale={locale}>{nextProduct}</NabihProduct>
    ) : (
        <School360Product>{nextProduct}</School360Product>
    )
}

async function NextProductLink({ slug, productKey }: { slug: string; productKey: string }) {
    const t = await getTranslations('productsPage')

    return (
        <section className="py-12 md:py-14">
            <Container>
                <Link
                    href={{ pathname: '/products/[slug]', params: { slug } }}
                    className="flex flex-wrap items-center justify-between gap-5 rounded-[18px] border border-navy/10 bg-surface px-7 py-7 transition-colors hover:border-accent"
                >
                    <div>
                        <div className="text-xs uppercase tracking-[0.12em] text-subtle">{t('nextProduct')}</div>
                        <div className="mt-1 font-serif text-2xl font-medium text-navy">
                            {t(`cards.${productKey}.name`)}
                        </div>
                    </div>
                    <span className="inline-block text-2xl text-navy rtl:-scale-x-100">→</span>
                </Link>
            </Container>
        </section>
    )
}
