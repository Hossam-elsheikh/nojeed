'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { site } from '@/lib/site'

interface ContactFormValues {
    name: string
    email: string
    projectType: string
    message: string
}

const projectTypeKeys = ['website', 'mobileApp', 'customSoftware', 'desktopApp', 'automation', 'other'] as const

export function FinalCta() {
    const t = useTranslations('finalCta')
    const f = useTranslations('contactForm')
    const [submitted, setSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({ defaultValues: { projectType: '' } })

    const onSubmit = async (data: ContactFormValues) => {
        setSubmitError(false)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (!res.ok) throw new Error('Request failed')
            setSubmitted(true)
            reset()
        } catch {
            setSubmitError(true)
        }
    }

    return (
        <section
            id="contact"
            className="py-20 md:py-28 flex flex-col items-center text-center px-4"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(1, 45, 41, 0.9), rgba(1, 53, 49, 0.85)), url('/images/contact-us/contact-us.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container className="flex flex-col items-center">
                <h2 className="font-bold text-foreground mb-4">{t('headline')}</h2>
                <p className="max-w-xl text-white/80 mb-10">{t('subheadline')}</p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl flex flex-col gap-4 text-start" noValidate>
                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm text-white/80">
                            {f('name')}
                        </label>
                        <Input
                            id="name"
                            type="text"
                            placeholder={f('namePlaceholder')}
                            aria-invalid={!!errors.name}
                            {...register('name', { required: f('errors.nameRequired') })}
                        />
                        {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm text-white/80">
                            {f('email')}
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder={f('emailPlaceholder')}
                            aria-invalid={!!errors.email}
                            {...register('email', {
                                required: f('errors.emailRequired'),
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: f('errors.emailInvalid') },
                            })}
                        />
                        {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="projectType" className="block mb-1 text-sm text-white/80">
                            {f('projectType')}
                        </label>
                        <Controller
                            name="projectType"
                            control={control}
                            rules={{ required: f('errors.projectTypeRequired') }}
                            render={({ field }) => (
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger id="projectType">
                                        <SelectValue placeholder={f('projectTypePlaceholder')} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {projectTypeKeys.map((key) => (
                                            <SelectItem key={key} value={key}>
                                                {f(`projectTypes.${key}`)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.projectType && (
                            <p className="text-red-300 text-sm mt-1">{errors.projectType.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1 text-sm text-white/80">
                            {f('message')}
                        </label>
                        <Textarea
                            id="message"
                            rows={4}
                            placeholder={f('messagePlaceholder')}
                            aria-invalid={!!errors.message}
                            {...register('message', {
                                required: f('errors.messageRequired'),
                                minLength: { value: 10, message: f('errors.messageTooShort') },
                            })}
                        />
                        {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-2xl bg-accent text-background px-4 py-3 font-medium hover:bg-accent/80 transition disabled:opacity-60"
                    >
                        {isSubmitting ? f('submitting') : f('submit')}
                    </button>

                    {submitted && (
                        <p role="status" className="text-accent text-sm">
                            {f('success')}
                        </p>
                    )}
                    {submitError && (
                        <p role="alert" className="text-red-300 text-sm">
                            {f('error')}
                        </p>
                    )}
                </form>

                <div className="flex items-center gap-3 my-6 w-full max-w-xl text-white/40 text-sm">
                    <span className="flex-1 h-px bg-white/20" />
                    {t('or')}
                    <span className="flex-1 h-px bg-white/20" />
                </div>

                <Link
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-accent text-background px-6 py-3 font-medium hover:bg-accent/80 transition"
                >
                    {t('whatsapp')}
                </Link>
            </Container>
        </section>
    )
}
