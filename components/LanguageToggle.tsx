'use client'

import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'

export function LanguageToggle({ className }: { className?: string }) {
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
            className={`inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition ${className ?? ''}`}
            aria-label={`Switch to ${nextLocale === 'en' ? 'English' : 'Arabic'}`}
        >
            <Globe className="size-4" />
            {nextLocale.toUpperCase()}
        </button>
    )
}
