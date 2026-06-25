import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/Container'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('termsPage')
    return { title: t('title') }
}

const sectionKeys = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12'] as const

export default async function TermsPage() {
    const t = await getTranslations('termsPage')

    return (
        <section className="py-16 md:py-20">
            <Container className="max-w-[800px]">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {t('eyebrow')}
                </div>
                <h1 className="font-serif font-medium text-navy text-[clamp(34px,4.5vw,52px)] leading-tight mt-3.5">
                    {t('title')}
                </h1>
                <p className="text-subtle text-sm mt-3">{t('updated')}</p>
                <p className="text-muted mt-6 leading-relaxed">{t('intro')}</p>

                <div className="mt-10 flex flex-col gap-7">
                    {sectionKeys.map((key) => (
                        <div key={key} className="rounded-2xl bg-surface border border-navy/10 px-6.5 py-5.5">
                            <h2 className="font-serif font-medium text-lg text-navy">
                                {t(`sections.${key}.title`)}
                            </h2>
                            <p className="text-muted text-[15px] leading-relaxed mt-2">
                                {t(`sections.${key}.body`)}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
