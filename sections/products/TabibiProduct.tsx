import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { tabibi, tabibiRoles, tabibiDay, tabibiFoundations } from '@/lib/data/products'

const chips = ['portals', 'liveQueue', 'arabicFirst'] as const

/** The workstation screens, each with the role that sits in front of it. */
const desktopScreens = ['reception', 'doctor', 'management'] as const

/** Every screenshot is the Arabic interface, whatever language the page is in. */
const screenProps = { dir: 'rtl', lang: 'ar' } as const

export async function TabibiProduct({ children }: { children?: React.ReactNode }) {
    const t = await getTranslations('products.tabibi')
    const tPage = await getTranslations('productsPage')
    const tHeader = await getTranslations('header')

    return (
        <>
            {/* ---------------------------------------------------------------- Hero */}
            <section className="relative overflow-hidden border-b border-navy/10">
                <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(33,125,95,0.16),transparent_54%)]"
                    aria-hidden="true"
                />
                <Container className="relative py-14">
                    <div className="text-[13px] text-subtle">
                        <Link href="/products" className="text-teal">
                            {tHeader('products')}
                        </Link>{' '}
                        / <span className="text-navy">{tPage('cards.tabibi.name')}</span>
                    </div>
                    <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                                <span className="size-1.5 rounded-full bg-accent" />
                                {t('eyebrow')}
                            </div>
                            <h1 className="mt-5 font-serif text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.08] text-navy">
                                {t('title')}
                            </h1>
                            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-muted">{t('subtitle')}</p>
                            <div className="mt-7 flex flex-wrap gap-2.5">
                                {chips.map((key) => (
                                    <span
                                        key={key}
                                        className="rounded-full border border-teal/30 bg-surface px-3.5 py-1.5 text-[13px] font-medium text-teal"
                                    >
                                        {t(`chips.${key}`)}
                                    </span>
                                ))}
                            </div>
                            <Button href={tabibi.siteHref} className="mt-7">
                                {t('demoLink')}
                            </Button>
                            <p className="mt-3 max-w-[480px] text-sm text-subtle">{t('demoNote')}</p>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] border border-navy/10 bg-[#0f1a22] shadow-[0_28px_80px_rgba(22,36,63,0.18)]">
                            <Image
                                src={tabibi.thumbnail}
                                alt={t('heroAlt')}
                                width={1280}
                                height={720}
                                priority
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ---------------------------------------------------------------- Roles */}
            <section className="py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('rolesEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('rolesTitle')}
                        </h2>
                        <p className="mx-auto mt-4 max-w-[640px] text-muted">{t('rolesIntro')}</p>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {tabibiRoles.map((role) => {
                            const Icon = role.icon
                            return (
                                <div
                                    key={role.key}
                                    className="rounded-2xl border border-navy/10 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent"
                                >
                                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy">
                                        <Icon className="text-teal-bright" size={22} aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-4.5 font-serif text-lg font-medium text-navy">
                                        {t(`roles.${role.key}.title`)}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                        {t(`roles.${role.key}.description`)}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* -------------------------------------------------------------- Screens */}
            <section className="border-y border-navy/8 bg-background-alt py-16 md:py-20">
                <Container className="flex flex-col gap-12">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('screensEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('screensTitle')}
                        </h2>
                    </div>

                    {desktopScreens.map((key, index) => (
                        <div
                            key={key}
                            className={
                                index % 2 === 1
                                    ? 'grid items-center gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-12'
                                    : 'grid items-center gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-12'
                            }
                        >
                            <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                                    {t(`screens.${key}.label`)}
                                </div>
                                <h3 className="mt-2.5 font-serif text-[clamp(24px,2.6vw,32px)] font-medium leading-tight text-navy">
                                    {t(`screens.${key}.title`)}
                                </h3>
                                <p className="mt-3 leading-relaxed text-muted">{t(`screens.${key}.description`)}</p>
                            </div>
                            <div
                                {...screenProps}
                                className="overflow-hidden rounded-[20px] border border-navy/10 bg-surface shadow-[0_24px_60px_-28px_rgba(22,36,63,0.45)]"
                            >
                                <Image
                                    src={tabibi.screen(key)}
                                    alt={t(`screens.${key}.alt`)}
                                    width={1440}
                                    height={900}
                                    sizes="(min-width: 1024px) 720px, 100vw"
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>
                    ))}

                    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                        <figure className="flex flex-col overflow-hidden rounded-[20px] border border-navy/10 bg-surface">
                            <div {...screenProps} className="bg-[#0b1420]">
                                <Image
                                    src={tabibi.screen('display')}
                                    alt={t('screens.display.alt')}
                                    width={1280}
                                    height={720}
                                    sizes="(min-width: 1024px) 680px, 100vw"
                                    className="h-auto w-full"
                                />
                            </div>
                            <figcaption className="p-6">
                                <div className="font-serif text-lg font-medium text-navy">
                                    {t('screens.display.title')}
                                </div>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                    {t('screens.display.description')}
                                </p>
                            </figcaption>
                        </figure>

                        <figure className="flex flex-col overflow-hidden rounded-[20px] border border-navy/10 bg-surface">
                            <div {...screenProps} className="grid grid-cols-2 gap-3 bg-background-alt p-4">
                                {(['booking', 'patient'] as const).map((key) => (
                                    <div
                                        key={key}
                                        className="relative aspect-[9/16] overflow-hidden rounded-[18px] border border-navy/10 bg-surface"
                                    >
                                        <Image
                                            src={tabibi.screen(key)}
                                            alt={t(`screens.${key}.alt`)}
                                            fill
                                            sizes="(min-width: 1024px) 220px, 45vw"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                ))}
                            </div>
                            <figcaption className="p-6">
                                <div className="font-serif text-lg font-medium text-navy">
                                    {t('screens.patient.title')}
                                </div>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                    {t('screens.patient.description')}
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </section>

            {/* ------------------------------------------------------------------ Day */}
            <section className="py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('dayEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('dayTitle')}
                        </h2>
                    </div>
                    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {tabibiDay.map((step, index) => (
                            <li key={step} className="rounded-2xl border border-navy/10 bg-surface p-6">
                                <span className="font-serif text-3xl font-medium text-accent">{index + 1}</span>
                                <h3 className="mt-3 font-serif text-lg font-medium text-navy">
                                    {t(`day.${step}.title`)}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                    {t(`day.${step}.description`)}
                                </p>
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>

            {/* ---------------------------------------------------------- Foundations */}
            <section className="border-y border-navy/8 bg-background-alt py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('foundationsEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('foundationsTitle')}
                        </h2>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {tabibiFoundations.map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.key} className="rounded-2xl border border-navy/10 bg-surface p-6.5">
                                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy">
                                        <Icon className="text-teal-bright" size={22} aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-4.5 font-serif text-lg font-medium text-navy">
                                        {t(`foundations.${item.key}.title`)}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                                        {t(`foundations.${item.key}.description`)}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {children}

            {/* ------------------------------------------------------------------ CTA */}
            <section className="relative overflow-hidden bg-navy-dark">
                <Container className="relative py-19 text-center">
                    <h2 className="font-serif text-[clamp(32px,4.2vw,54px)] font-normal leading-[1.05] text-white">
                        {t('ctaTitle')}
                    </h2>
                    <div className="mt-6.5 flex flex-wrap justify-center gap-3.5">
                        <Button href={tabibi.siteHref}>{t('demoLink')}</Button>
                        <Button href="/contact" variant="outline-light">
                            {t('ctaButton')}
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    )
}
