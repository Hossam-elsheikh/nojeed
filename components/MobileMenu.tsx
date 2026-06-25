'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
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

    const isRTL = locale === 'ar'

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="text-navy" aria-label="Open menu">
                <Menu />
            </Dialog.Trigger>

            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild forceMount>
                            <motion.div
                                className="fixed inset-0 bg-navy-darker/50 z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            />
                        </Dialog.Overlay>

                        <Dialog.Content asChild forceMount>
                            <motion.div
                                className={`fixed inset-y-0 ${isRTL ? 'left-0' : 'right-0'} z-50 w-3/4 max-w-sm bg-background p-6 flex flex-col gap-8 outline-none`}
                                initial={{ x: isRTL ? '-100%' : '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: isRTL ? '-100%' : '100%' }}
                                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
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
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}
