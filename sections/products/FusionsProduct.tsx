import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { CalendarDays, Gamepad2, Shuffle } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

const screenshots = [
    { key: 'hub', file: 'hub.png' },
    { key: 'picker', file: 'fusion-picker.png' },
    { key: 'snake', file: 'snake.png' },
] as const

const features = [
    { key: 'core', Icon: Gamepad2 },
    { key: 'fusion', Icon: Shuffle },
    { key: 'daily', Icon: CalendarDays },
] as const

export async function FusionsProduct({ children }: { children?: React.ReactNode }) {
    const t = await getTranslations('products.fusions')
    const tPage = await getTranslations('productsPage')
    const tHeader = await getTranslations('header')

    return (
        <>
            <section className="relative overflow-hidden border-b border-navy/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(118,93,255,0.16),transparent_54%)]" aria-hidden="true" />
                <Container className="relative py-14">
                    <div className="text-[13px] text-subtle">
                        <Link href="/products" className="text-teal">{tHeader('products')}</Link> / <span className="text-navy">{tPage('cards.fusions.name')}</span>
                    </div>
                    <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                                <span className="size-1.5 rounded-full bg-accent" />{t('eyebrow')}
                            </div>
                            <div className="mt-5 flex items-center gap-4">
                                <Image src="/images/products/fusions/icon.png" alt="" width={64} height={64} className="size-16 rounded-2xl border border-navy/10 bg-[#100d20]" priority />
                                <div>
                                    <div className="font-serif text-3xl font-medium text-navy">Fusions</div>
                                    <div className="text-sm text-subtle">{tPage('cards.fusions.meta')}</div>
                                </div>
                            </div>
                            <h1 className="mt-6 font-serif text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.08] text-navy">{t('title')}</h1>
                            <p className="mt-5 max-w-[540px] text-lg text-muted">{t('subtitle')}</p>
                            <div className="mt-7 flex flex-wrap gap-2.5">
                                {(['platform', 'offline', 'account'] as const).map((key) => (
                                    <span key={key} className="rounded-full border border-teal/30 bg-surface px-3.5 py-1.5 text-[13px] font-medium text-teal">{t(`chips.${key}`)}</span>
                                ))}
                            </div>
                            <div className="mt-7 flex flex-wrap items-center gap-3.5">
                                <Link href="/privacy/fusions" className="inline-flex min-h-11 items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal">{t('privacyLink')}</Link>
                                <Button href={`mailto:${site.email}`} variant="outline">{t('contact')}</Button>
                            </div>
                        </div>
                        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-navy/12 bg-[#100d20] shadow-[0_28px_80px_rgba(20,18,54,0.22)]">
                            <Image src="/images/products/fusions/screens/hub.png" alt={t('heroAlt')} width={1080} height={2160} priority className="h-auto w-full" />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-20">
                <Container>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal"><span className="size-1.5 rounded-full bg-accent" />{t('featuresEyebrow')}</div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">{t('featuresTitle')}</h2>
                    </div>
                    <div className="mt-9 grid gap-5 md:grid-cols-3">
                        {features.map(({ key, Icon }) => (
                            <article key={key} className="rounded-2xl border border-navy/10 bg-surface p-6">
                                <Icon size={22} className="text-teal" aria-hidden="true" />
                                <h3 className="mt-4 font-serif text-xl font-medium text-navy">{t(`features.${key}.title`)}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted">{t(`features.${key}.description`)}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="bg-background-alt py-16 md:py-20">
                <Container>
                    <div className="max-w-[650px]">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{t('screenshotsEyebrow')}</div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">{t('screenshotsTitle')}</h2>
                    </div>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {screenshots.map(({ key, file }) => (
                            <figure key={key} className="overflow-hidden rounded-2xl border border-navy/10 bg-[#100d20] shadow-[0_14px_38px_rgba(20,18,54,0.12)]">
                                <Image src={`/images/products/fusions/screens/${file}`} alt={t(`screenshots.${key}.alt`)} width={1080} height={2160} className="h-auto w-full" />
                                <figcaption className="bg-surface px-5 py-4 font-serif text-lg text-navy">{t(`screenshots.${key}.title`)}</figcaption>
                            </figure>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-14">
                <Container>
                    <div className="rounded-[24px] bg-navy-dark px-7 py-9 text-white md:px-10">
                        <div className="max-w-[700px]">
                            <h2 className="font-serif text-3xl font-medium">{t('privacyTitle')}</h2>
                            <p className="mt-3 leading-relaxed text-white/75">{t('privacyBody')}</p>
                            <Link href="/privacy/fusions" className="mt-5 inline-flex text-sm font-semibold text-teal-bright underline underline-offset-4">{t('privacyLink')}</Link>
                        </div>
                    </div>
                </Container>
            </section>
            {children}
        </>
    )
}
