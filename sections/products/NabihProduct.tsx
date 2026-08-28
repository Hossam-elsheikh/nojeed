import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import {
    ArrowUpRight,
    Check,
    Lock,
    ServerOff,
    WifiOff,
    Quote,
    CalendarDays,
    Hash,
    Coins,
    CalendarRange,
} from 'lucide-react'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/Button'
import { ScreenCrop } from '@/components/ScreenCrop'
import {
    nabih,
    nabihAreas,
    nabihFeatures,
    nabihPrimitives,
    nabihPrivacy,
    nabihQuiet,
    nabihDialects,
    nabihLanguages,
} from '@/lib/data/products'

/** Nabih's own brand green — used sparingly, where the app's voice speaks. */
const green = '#3e6b55'

const stack = ['Flutter', 'Drift + SQLCipher', 'iOS & Android', 'Offline-first'] as const

export async function NabihProduct({ locale, children }: { locale: string; children?: React.ReactNode }) {
    const t = await getTranslations('products.nabih')
    const tPage = await getTranslations('productsPage')
    const tHeader = await getTranslations('header')
    const screen = (file: string) => nabih.screen(locale, file)

    return (
        <>
            {/* ---------------------------------------------------------------- Hero */}
            <section className="relative overflow-hidden border-b border-navy/10">
                <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,rgba(37,196,199,0.13),transparent_58%)]"
                    aria-hidden="true"
                />
                <Container className="relative py-14">
                    <div className="text-[13px] text-subtle">
                        <Link href="/products" className="text-teal">
                            {tHeader('products')}
                        </Link>{' '}
                        / <span className="text-navy">{tPage('cards.nabih.name')}</span>
                    </div>

                    <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                                <span className="size-1.5 rounded-full bg-accent" />
                                {t('eyebrow')}
                            </div>

                            <div className="mt-5 flex items-center gap-4">
                                <Image
                                    src={nabih.icon}
                                    alt=""
                                    width={64}
                                    height={64}
                                    className="size-16 rounded-2xl border border-navy/10 bg-surface"
                                    priority
                                />
                                <div>
                                    <div className="font-serif text-3xl font-medium text-navy">
                                        {tPage('cards.nabih.name')}
                                    </div>
                                    <div className="text-sm text-subtle">{tPage('cards.nabih.meta')}</div>
                                </div>
                            </div>

                            <h1 className="mt-6 font-serif text-[clamp(32px,4.4vw,54px)] font-medium leading-[1.08] text-navy">
                                {t('title')}
                            </h1>
                            <p className="mt-5 max-w-[540px] text-lg text-muted">{t('subtitle')}</p>
                            <p className="mt-3 text-sm text-subtle">{t('meaning')}</p>

                            <div className="mt-7 flex flex-wrap gap-2.5">
                                {[
                                    { key: 'noServer', Icon: ServerOff },
                                    { key: 'encrypted', Icon: Lock },
                                    { key: 'offline', Icon: WifiOff },
                                ].map(({ key, Icon }) => (
                                    <span
                                        key={key}
                                        className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-surface px-3.5 py-1.5 text-[13px] font-medium text-navy"
                                    >
                                        <Icon size={15} className="text-teal" aria-hidden="true" />
                                        {t(`chips.${key}`)}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 flex flex-wrap items-center gap-3.5">
                                <Button href={nabih.storeHref} variant="dark">
                                    {t('ctaStore')}
                                </Button>
                                <Button href={nabih.siteHref} variant="outline">
                                    {t('ctaSite')}
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </Button>
                            </div>
                            <p className="mt-3.5 text-[13px] text-subtle">{t('ctaNote')}</p>
                        </div>

                        {/* The day's list, cropped, with the notification it would send */}
                        <div className="relative mx-auto w-full max-w-[400px]">
                            <div
                                className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(162,199,83,0.16),transparent_68%)]"
                                aria-hidden="true"
                            />
                            <ScreenCrop
                                src={screen('today')}
                                alt={t('screensNote')}
                                priority
                                ratio="4 / 5"
                                sizes="(min-width: 1024px) 400px, 90vw"
                            />
                            <div className="absolute -bottom-7 -end-3 max-w-[260px] rounded-2xl border border-navy/10 bg-surface p-4 shadow-[0_18px_40px_rgba(22,36,63,0.16)] sm:-end-8">
                                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                                    <Image src={nabih.icon} alt="" width={18} height={18} className="rounded" />
                                    {tPage('cards.nabih.name')}
                                </div>
                                <p className="mt-2 text-[13.5px] leading-relaxed text-navy">
                                    {t('features.rhythm.quote')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <dl className="mt-14 grid gap-6 border-t border-navy/10 pt-8 sm:grid-cols-3">
                        {[
                            { key: 'cities', value: '6,000+' },
                            { key: 'marks', value: '35' },
                            { key: 'locales', value: '8' },
                        ].map(({ key, value }) => (
                            <div key={key}>
                                <dt className="font-serif text-[34px] font-medium leading-none text-navy">{value}</dt>
                                <dd className="mt-2 text-sm text-muted">{t(`stats.${key}`)}</dd>
                            </div>
                        ))}
                    </dl>
                </Container>
            </section>

            {/* -------------------------------------------------------- Three primitives */}
            <section className="border-b border-navy/8 bg-background-alt py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="max-w-[720px]">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('primitivesEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('primitivesTitle')}
                        </h2>
                        <p className="mt-4 text-muted">{t('primitivesIntro')}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {nabihPrimitives.map(({ key, icon: Icon }) => (
                            <div
                                key={key}
                                className="flex flex-col rounded-2xl border border-navy/10 bg-surface p-6.5 transition-colors hover:border-accent"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy">
                                        <Icon className="text-teal-bright" size={19} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-serif text-xl font-medium text-navy">
                                        {t(`primitives.${key}.title`)}
                                    </h3>
                                </div>
                                <p className="mt-4 text-[15px] font-medium" style={{ color: green }}>
                                    {t(`primitives.${key}.question`)}
                                </p>
                                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                                    {t(`primitives.${key}.description`)}
                                </p>
                                <div className="mt-6 rounded-xl border border-navy/8 bg-background p-4">
                                    <PrimitiveDiagram variant={key} />
                                    <p className="mt-3 text-center text-xs text-subtle">
                                        {t(`primitives.${key}.example`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ------------------------------------------------------------------ Areas */}
            <section className="py-16 md:py-20">
                <Container className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('areasEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.08] text-navy">
                            {t('areasTitle')}
                        </h2>
                        <p className="mt-4 max-w-[540px] text-muted">{t('areasIntro')}</p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {nabihAreas.map(({ key, icon: Icon }) => (
                                <span
                                    key={key}
                                    className="inline-flex items-center gap-2.5 rounded-full border border-navy/12 bg-surface px-4 py-2.5 text-sm font-medium text-navy"
                                >
                                    <Icon size={16} style={{ color: green }} aria-hidden="true" />
                                    {t(`areas.${key}`)}
                                </span>
                            ))}
                        </div>

                        <p className="mt-7 border-s-2 border-accent ps-4 text-sm leading-relaxed text-muted">
                            {t('areasNote')}
                        </p>
                    </div>

                    <ScreenCrop
                        src={screen('prayers')}
                        alt={t('areas.prayers')}
                        className="mx-auto w-full max-w-[380px]"
                        ratio="1 / 1"
                        sizes="(min-width: 1024px) 380px, 85vw"
                    />
                </Container>
            </section>

            {/* --------------------------------------------------------------- Features */}
            <section className="border-y border-navy/8 bg-background-alt py-16 md:py-20">
                <Container className="flex flex-col gap-14">
                    <div className="max-w-[640px]">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('featuresEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-medium leading-[1.05] text-navy">
                            {t('featuresTitle')}
                        </h2>
                    </div>

                    <div className="flex flex-col gap-14 md:gap-20">
                        {nabihFeatures.map((feature, index) => (
                            <div
                                key={feature.key}
                                className="grid items-center gap-9 md:grid-cols-[1fr_360px] md:gap-14"
                            >
                                <div className={index % 2 === 1 ? 'md:order-2' : undefined}>
                                    <span className="font-serif text-sm text-subtle">0{index + 1}</span>
                                    <h3 className="mt-2 font-serif text-[clamp(22px,2.4vw,30px)] font-medium leading-[1.2] text-navy">
                                        {t(`features.${feature.key}.title`)}
                                    </h3>
                                    <p className="mt-4 max-w-[520px] text-[15.5px] leading-relaxed text-muted">
                                        {t(`features.${feature.key}.description`)}
                                    </p>
                                    <figure className="mt-6 max-w-[500px] rounded-2xl border border-navy/10 bg-surface p-5">
                                        <Quote
                                            size={18}
                                            className="rtl:-scale-x-100"
                                            style={{ color: green }}
                                            aria-hidden="true"
                                        />
                                        <blockquote className="mt-2.5 font-serif text-[17px] leading-relaxed text-navy">
                                            {t(`features.${feature.key}.quote`)}
                                        </blockquote>
                                    </figure>
                                </div>
                                <ScreenCrop
                                    src={screen(feature.screen)}
                                    alt={t(`features.${feature.key}.title`)}
                                    className={`mx-auto w-full max-w-[360px] ${index % 2 === 1 ? 'md:order-1' : ''}`}
                                    ratio="1 / 1"
                                    sizes="(min-width: 768px) 360px, 85vw"
                                />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ------------------------------------------------------------ Quiet by design */}
            <section className="py-16 md:py-20">
                <Container className="flex flex-col gap-10">
                    <div className="max-w-[640px]">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('quietEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.08] text-navy">
                            {t('quietTitle')}
                        </h2>
                    </div>

                    <div className="grid items-center gap-10 lg:grid-cols-[300px_1fr_300px]">
                        <ScreenCrop
                            src={screen('reminders')}
                            alt={t('quiet.notifications.title')}
                            className="mx-auto w-full max-w-[320px] lg:order-1"
                            ratio="3 / 4"
                            sizes="(min-width: 1024px) 300px, 80vw"
                        />

                        <div className="flex flex-col gap-4 lg:order-2">
                            {nabihQuiet.map(({ key, icon: Icon }) => (
                                <div key={key} className="rounded-2xl border border-navy/10 bg-surface p-6">
                                    <div className="flex items-center gap-3">
                                        <Icon size={18} className="text-teal" aria-hidden="true" />
                                        <h3 className="font-serif text-lg font-medium text-navy">
                                            {t(`quiet.${key}.title`)}
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-muted">
                                        {t(`quiet.${key}.description`)}
                                    </p>
                                    {key === 'widgets' && <WidgetMock label={t('quiet.widgets.title')} />}
                                </div>
                            ))}
                        </div>

                        <ScreenCrop
                            src={screen('badges')}
                            alt={t('quiet.marks.title')}
                            className="mx-auto w-full max-w-[320px] lg:order-3"
                            ratio="3 / 4"
                            sizes="(min-width: 1024px) 300px, 80vw"
                        />
                    </div>

                    <div className="rounded-2xl border border-navy/10 bg-background-alt p-7 md:p-9">
                        <h3 className="font-serif text-xl font-medium text-navy">{t('noShameTitle')}</h3>
                        <p className="mt-3 max-w-[760px] text-[15.5px] leading-relaxed text-muted">
                            {t('noShameBody')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* ---------------------------------------------------------------- Privacy */}
            <section className="relative overflow-hidden bg-navy-dark py-16 md:py-20">
                <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(37,196,199,0.14),transparent_60%)]"
                    aria-hidden="true"
                />
                <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('privacyEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(30px,3.8vw,46px)] font-normal leading-[1.06] text-white">
                            {t('privacyTitle')}
                        </h2>
                        <p className="mt-5 max-w-[560px] text-white/70">{t('privacyBody')}</p>

                        <ul className="mt-7 flex flex-col gap-3">
                            {nabihPrivacy.map((key) => (
                                <li key={key} className="flex items-start gap-3 text-[15px] text-white/85">
                                    <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                                    {t(`privacy.${key}`)}
                                </li>
                            ))}
                        </ul>

                        <p className="mt-7 border-s border-white/15 ps-4 text-sm leading-relaxed text-white/60">
                            {t('privacyNote')}
                        </p>
                    </div>

                    <VaultDiagram />
                </Container>
            </section>

            {/* --------------------------------------------------------------- Language */}
            <section className="py-16 md:py-20">
                <Container className="flex flex-col gap-9">
                    <div className="max-w-[720px]">
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {t('langEyebrow')}
                        </div>
                        <h2 className="mt-3.5 font-serif text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.08] text-navy">
                            {t('langTitle')}
                        </h2>
                        <p className="mt-4 text-muted">{t('langBody')}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl border border-navy/10 bg-surface p-6.5">
                            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                                {t('dialectsLabel')}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2.5">
                                {nabihDialects.map((key) => (
                                    <span
                                        key={key}
                                        className="rounded-full px-3.5 py-1.5 text-sm font-medium text-white"
                                        style={{ backgroundColor: green }}
                                    >
                                        {t(`dialects.${key}`)}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                                {t('languagesLabel')}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2.5">
                                {nabihLanguages.map((key) => (
                                    <span
                                        key={key}
                                        className="rounded-full border border-navy/15 px-3.5 py-1.5 text-sm font-medium text-navy"
                                    >
                                        {t(`languages.${key}`)}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { Icon: Hash, value: '٠١٢٣ / 0123' },
                                {
                                    Icon: CalendarDays,
                                    value: 'Hijri / Gregorian',
                                },
                                {
                                    Icon: CalendarRange,
                                    value: 'Sat · Sun · Mon',
                                },
                                { Icon: Coins, value: 'EGP · SAR · EUR' },
                            ].map(({ Icon, value }) => (
                                <div
                                    key={value}
                                    className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-background-alt p-5"
                                >
                                    <Icon size={18} className="text-teal" aria-hidden="true" />
                                    <div className="mt-6 font-serif text-[15px] text-navy">{value}</div>
                                </div>
                            ))}
                            <div className="col-span-2 rounded-2xl border border-navy/10 bg-background-alt px-5 py-4 text-center text-sm font-medium text-navy">
                                {t('rtl')}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-navy/10 pt-7">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                            {t('stackLabel')}
                        </span>
                        {stack.map((item) => (
                            <span key={item} className="text-sm font-medium text-navy">
                                {item}
                            </span>
                        ))}
                    </div>
                </Container>
            </section>

            {children}

            {/* -------------------------------------------------------------------- CTA */}
            <section className="relative overflow-hidden bg-navy-dark">
                <Container className="relative py-19 text-center">
                    <h2 className="font-serif text-[clamp(32px,4.2vw,54px)] font-normal leading-[1.05] text-white">
                        {t('ctaTitle')}
                    </h2>
                    <Button href={nabih.storeHref} className="mt-6.5">
                        {t('ctaButton')}
                    </Button>
                </Container>
            </section>
        </>
    )
}

/* -------------------------------------------------------------------------- */
/*  Graphics                                                                   */
/* -------------------------------------------------------------------------- */

/** One small diagram per primitive: a cadence, a finish line, a ledger. */
function PrimitiveDiagram({ variant }: { variant: 'recurring' | 'progress' | 'log' }) {
    const common = 'w-full h-[64px]'

    if (variant === 'recurring') {
        return (
            <svg viewBox="0 0 200 64" className={common} fill="none" aria-hidden="true">
                <line x1="12" y1="34" x2="188" y2="34" stroke="#16243f" strokeOpacity="0.12" strokeWidth="2" />
                {[24, 52, 80, 108].map((x) => (
                    <circle key={x} cx={x} cy="34" r="6" fill="#0e8e9a" />
                ))}
                <path d="M118 34h44" stroke="#a2c753" strokeWidth="2" strokeDasharray="3 5" />
                <circle cx="172" cy="34" r="8" fill="none" stroke="#a2c753" strokeWidth="2" />
                <path d="M108 18h64" stroke="#16243f" strokeOpacity="0.18" strokeWidth="1.5" />
                <path d="M108 14v8M172 14v8" stroke="#16243f" strokeOpacity="0.18" strokeWidth="1.5" />
            </svg>
        )
    }

    if (variant === 'progress') {
        return (
            <svg viewBox="0 0 200 64" className={common} fill="none" aria-hidden="true">
                <rect x="12" y="28" width="152" height="12" rx="6" fill="#16243f" fillOpacity="0.1" />
                <rect x="12" y="28" width="62" height="12" rx="6" fill="#0e8e9a" />
                <path d="M74 22v24" stroke="#16243f" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
                <path d="M176 14v36" stroke="#16243f" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
                <path d="M176 16h16l-5 7 5 7h-16z" fill="#a2c753" />
            </svg>
        )
    }

    return (
        <svg viewBox="0 0 200 64" className={common} fill="none" aria-hidden="true">
            <line x1="12" y1="52" x2="188" y2="52" stroke="#16243f" strokeOpacity="0.12" strokeWidth="2" />
            {[
                [24, 22],
                [48, 34],
                [72, 16],
                [96, 28],
                [120, 12],
                [144, 30],
                [168, 20],
            ].map(([x, h]) => (
                <rect key={x} x={x} y={52 - h} width="14" height={h} rx="4" fill="#0e8e9a" fillOpacity="0.75" />
            ))}
            <path d="M12 20h176" stroke="#a2c753" strokeWidth="2" strokeDasharray="4 6" />
        </svg>
    )
}

/** Nothing leaves the device: the phone holds the key, the cloud is crossed out. */
function VaultDiagram() {
    return (
        <div className="relative mx-auto w-full max-w-[380px]">
            <svg viewBox="0 0 300 260" className="w-full" fill="none" aria-hidden="true">
                <circle cx="150" cy="170" r="96" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.5" />
                <circle
                    cx="150"
                    cy="170"
                    r="70"
                    stroke="#25c4c7"
                    strokeOpacity="0.25"
                    strokeWidth="1.5"
                    strokeDasharray="4 7"
                />

                {/* the cloud, and the line through it */}
                <path
                    d="M104 44c0-11 9-20 20-20 7 0 13 4 17 9 3-3 8-5 13-5 11 0 20 9 20 20v1c9 1 16 9 16 18 0 10-8 18-18 18h-66c-11 0-20-9-20-20 0-10 8-19 18-21z"
                    stroke="#ffffff"
                    strokeOpacity="0.22"
                    strokeWidth="2"
                />
                <path d="M96 92 190 22" stroke="#a2c753" strokeWidth="2.5" strokeLinecap="round" />

                {/* nothing travels up */}
                <path d="M150 128V104" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="3 6" />

                {/* the device */}
                <rect
                    x="112"
                    y="128"
                    width="76"
                    height="126"
                    rx="16"
                    fill="#0a1426"
                    stroke="#25c4c7"
                    strokeOpacity="0.4"
                    strokeWidth="2"
                />
                <rect x="122" y="140" width="56" height="102" rx="9" fill="#16243f" />
                <rect x="138" y="182" width="24" height="20" rx="4" fill="#a2c753" />
                <path d="M143 182v-7a7 7 0 0 1 14 0v7" stroke="#a2c753" strokeWidth="2.5" />
                <circle cx="150" cy="191" r="2.6" fill="#0a1426" />
                <rect x="132" y="154" width="36" height="4" rx="2" fill="#ffffff" fillOpacity="0.18" />
                <rect x="132" y="164" width="24" height="4" rx="2" fill="#ffffff" fillOpacity="0.12" />
                <rect x="132" y="216" width="36" height="4" rx="2" fill="#ffffff" fillOpacity="0.12" />
                <rect x="132" y="226" width="24" height="4" rx="2" fill="#ffffff" fillOpacity="0.08" />
            </svg>
        </div>
    )
}

/** A miniature of the home screen widget: what's late, what's next. */
function WidgetMock({ label }: { label: string }) {
    return (
        <div className="mt-5 rounded-xl border border-navy/10 bg-background p-4" role="img" aria-label={label}>
            {[70, 50].map((width, index) => (
                <div
                    key={width}
                    className={`flex items-center justify-between gap-4 ${index === 0 ? '' : 'mt-3.5 border-t border-navy/8 pt-3.5'}`}
                >
                    <span className="flex flex-col gap-1.5" style={{ width: `${width}%` }}>
                        <span className="block h-2 rounded-full bg-navy/20" />
                        <span className="block h-2 w-1/2 rounded-full bg-navy/10" />
                    </span>
                    <span
                        className={`size-5 shrink-0 rounded-full border-2 ${index === 0 ? 'border-navy/15' : ''}`}
                        style={index === 0 ? undefined : { borderColor: green, backgroundColor: green }}
                    />
                </div>
            ))}
        </div>
    )
}
