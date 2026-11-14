import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/Container'
import { Link } from '@/i18n/routing'
import { products, type ProductKey } from '@/lib/data/products'

const sectionKeys: Record<ProductKey, readonly string[]> = {
    nabih: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
    school360: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11'],
    fusions: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'],
    sandwich: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'],
}

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const product = products.find((item) => item.slug === slug)
    if (!product) return {}

    const t = await getTranslations('productTermsPage')
    return {
        title: t(`products.${product.key}.pageTitle`),
        description: t(`products.${product.key}.intro`),
    }
}

export default async function ProductTermsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const product = products.find((item) => item.slug === slug)
    if (!product) notFound()

    const t = await getTranslations('productTermsPage')
    const namespace = `products.${product.key}`

    return (
        <section className="py-16 md:py-20">
            <Container className="max-w-[800px]">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {t(`${namespace}.eyebrow`)}
                </div>
                <h1 className="mt-3.5 font-serif text-[clamp(34px,4.5vw,52px)] font-medium leading-tight text-navy">
                    {t(`${namespace}.pageTitle`)}
                </h1>
                <p className="mt-3 text-sm text-subtle">{t('updated')}</p>
                <p className="mt-6 leading-relaxed text-muted">{t(`${namespace}.intro`)}</p>
                {product.key === 'fusions' && (
                    <Link href="/privacy/fusions" className="mt-4 inline-flex text-sm font-semibold text-teal underline underline-offset-4">
                        {t('fusionsPrivacyLink')}
                    </Link>
                )}

                <div className="mt-10 flex flex-col gap-5">
                    {sectionKeys[product.key].map((key) => (
                        <section key={key} className="rounded-2xl border border-navy/10 bg-surface px-6 py-5">
                            <h2 className="font-serif text-lg font-medium text-navy">
                                {t(`${namespace}.sections.${key}.title`)}
                            </h2>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted">
                                {t(`${namespace}.sections.${key}.body`)}
                            </p>
                        </section>
                    ))}
                </div>
            </Container>
        </section>
    )
}
