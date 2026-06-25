'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import { cn } from '@/lib/utils'

export function LanguageToggle({ className, light }: { className?: string; light?: boolean }) {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()
    const nextLocale = locale === 'en' ? 'ar' : 'en'

    return (
        <button
            type="button"
            onClick={() =>
                router.replace(
                    // @ts-expect-error -- pathname/params always match at runtime for this route
                    { pathname, params },
                    { locale: nextLocale }
                )
            }
            className={cn(
                'group inline-flex items-center gap-1.5 text-[13.5px] cursor-pointer transition-colors',
                light ? 'text-white/70 hover:text-white' : 'text-subtle hover:text-teal',
                className
            )}
            aria-label={`Switch to ${nextLocale === 'en' ? 'English' : 'Arabic'}`}
        >
            <span
                className={cn(
                    'font-semibold transition-colors group-hover:text-teal',
                    locale === 'en' ? (light ? 'text-white group-hover:text-white' : 'text-navy') : ''
                )}
            >
                EN
            </span>
            <span className="opacity-35">/</span>
            <span
                className={cn(
                    'transition-colors group-hover:text-teal',
                    locale === 'ar' ? (light ? 'text-white font-semibold group-hover:text-white' : 'text-navy font-semibold') : ''
                )}
            >
                ع
            </span>
        </button>
    )
}
