'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

const locales = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
]

export function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = useLocale()

    const changeLocale = (newLocale: string) => {
        const segments = pathname.split('/')
        segments[1] = newLocale // assumes locale is the first part of the route
        const newPath = segments.join('/')
        router.push(newPath)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default" className="flex items-center gap-2 bg-transparent">
                    <Globe className="w-4 h-4" />
                    <span className="capitalize">{currentLocale}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='bg-primary text-white'>
                {locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale.code}
                        onClick={() => changeLocale(locale.code)}
                        className={
                            locale.code === currentLocale ? 'font-semibold' : ''
                        }
                    >
                        {locale.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
