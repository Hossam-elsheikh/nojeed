'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { LanguageToggle } from './LanguageToggle'
import { site } from '@/lib/site'

export function MobileMenu() {
    const [open, setOpen] = useState(false)
    const locale = useLocale()
    const t = useTranslations('header')

    const links = [
        { href: '#services', label: t('services') },
        { href: '#portfolio', label: t('work') },
        { href: '#whyus', label: t('whyus') },
        { href: '#contact', label: t('contact') },
    ]
    const side = locale === 'ar' ? 'left' : 'right'

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="text-foreground" aria-label="Open menu">
                <Menu />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 z-40 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                <Dialog.Content
                    className={`fixed inset-y-0 ${side === 'right' ? 'right-0' : 'left-0'} z-50 w-3/4 max-w-sm bg-[#0d1f1c] p-6 flex flex-col gap-8 outline-none`}
                >
                    <div className="flex items-center justify-between">
                        <Dialog.Title className="text-foreground font-semibold">Nojeed</Dialog.Title>
                        <Dialog.Close aria-label="Close menu" className="text-foreground">
                            <X />
                        </Dialog.Close>
                    </div>
                    <Dialog.Description className="sr-only">Site navigation</Dialog.Description>
                    <nav className="flex flex-col gap-6 text-lg">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-foreground hover:text-accent transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href={site.calendlyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="rounded-2xl bg-accent text-background px-5 py-3 text-center font-medium"
                    >
                        {t('cta')}
                    </Link>
                    <LanguageToggle />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
