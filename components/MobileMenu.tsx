'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { LanguageToggle } from './LanguageToggle'

export function MobileMenu() {
    const [open, setOpen] = useState(false)
    const locale = useLocale()
    const t = useTranslations('header')

    const links = [
        { href: '/services', label: t('services') },
        { href: '/projects', label: t('projects') },
        { href: '/products', label: t('products') },
        { href: '/contact', label: t('contact') },
    ] as const
    const side = locale === 'ar' ? 'left' : 'right'

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="text-navy" aria-label="Open menu">
                <Menu />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-navy-darker/50 z-40 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                <Dialog.Content
                    className={`fixed inset-y-0 ${side === 'right' ? 'right-0' : 'left-0'} z-50 w-3/4 max-w-sm bg-background p-6 flex flex-col gap-8 outline-none`}
                >
                    <div className="flex items-center justify-between">
                        <Dialog.Title className="text-navy font-serif font-medium">Nojeed</Dialog.Title>
                        <Dialog.Close aria-label="Close menu" className="text-navy">
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
                                className="text-navy hover:text-teal transition font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <LanguageToggle />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
