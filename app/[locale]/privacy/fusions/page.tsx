import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/Container'

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('fusionsPrivacyPage')
    return { title: t('title'), description: t('intro'), robots: { index: true, follow: true } }
}

const sections = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'] as const

export default async function FusionsPrivacyPage() {
    const t = await getTranslations('fusionsPrivacyPage')

    return (
        <section className="py-16 md:py-20">
            <Container className="max-w-[800px]">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    <span className="size-1.5 rounded-full bg-accent" />{t('eyebrow')}
                </div>
                <h1 className="mt-3.5 font-serif text-[clamp(34px,4.5vw,52px)] font-medium leading-tight text-navy">{t('title')}</h1>
                <p className="mt-3 text-sm text-subtle">{t('updated')}</p>
                <p className="mt-6 leading-relaxed text-muted">{t('intro')}</p>
                <div className="mt-10 flex flex-col gap-5">
                    {sections.map((key) => (
                        <section key={key} className="rounded-2xl border border-navy/10 bg-surface px-6 py-5">
                            <h2 className="font-serif text-lg font-medium text-navy">{t(`sections.${key}.title`)}</h2>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted">{t(`sections.${key}.body`)}</p>
                        </section>
                    ))}
                </div>
            </Container>
        </section>
    )
}
