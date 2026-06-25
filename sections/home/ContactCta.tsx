import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export function ContactCta() {
    const t = useTranslations('finalCta')
    const header = useTranslations('header')

    return (
        <section className="relative overflow-hidden bg-navy-dark">
            <svg
                viewBox="0 0 1240 400"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 w-full h-full"
                fill="none"
                aria-hidden="true"
            >
                <g stroke="#25C4C7" strokeWidth="1.4" opacity=".4">
                    <path d="M0 300 H260 V200 H520" strokeLinecap="round" />
                    <path d="M1240 120 H980 V240 H760" strokeLinecap="round" />
                </g>
                <g stroke="#A2C753" strokeWidth="1.4" opacity=".35">
                    <path d="M0 80 H140 V30" strokeLinecap="round" />
                </g>
                <circle cx="520" cy="200" r="5" fill="#25C4C7" />
                <circle cx="760" cy="240" r="5" fill="#25C4C7" />
                <circle cx="140" cy="30" r="4" fill="#A2C753" />
            </svg>

            <div className="relative max-w-[1240px] mx-auto px-5 md:px-10 py-20 md:py-28 text-center">
                <h2 className="font-serif font-normal text-white text-[clamp(40px,5.5vw,72px)] leading-[1.04]">
                    {t('headline')}
                </h2>
                <p className="text-white/70 max-w-[480px] mx-auto mt-5.5 text-lg">{t('subheadline')}</p>
                <div className="flex flex-wrap gap-3.5 justify-center mt-8">
                    <Button href={site.calendlyHref}>
                        {header('cta')} <span className="inline-block rtl:-scale-x-100">→</span>
                    </Button>
                    <Button href={site.whatsappHref} variant="outline-light">
                        {t('whatsapp')}
                    </Button>
                </div>
            </div>
        </section>
    )
}
