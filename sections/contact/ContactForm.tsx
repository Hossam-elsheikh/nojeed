'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'

interface ContactFormValues {
    name: string
    email: string
    projectType: string
    message: string
}

const projectTypeKeys = ['website', 'mobileApp', 'customSoftware', 'desktopApp', 'automation', 'other'] as const

export function ContactForm() {
    const f = useTranslations('contactForm')
    const cp = useTranslations('contactPage')
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
        <div className="bg-white border border-navy/10 rounded-[22px] p-7 md:p-10 shadow-[0_18px_50px_rgba(22,36,63,0.08)]">
            {submitted ? (
                <div className="text-center py-7.5 px-2.5">
                    <div className="size-[70px] rounded-full bg-accent flex items-center justify-center mx-auto">
                        <Check className="text-navy" size={34} strokeWidth={3} />
                    </div>
                    <h2 className="font-serif font-medium text-3xl text-navy mt-6">{f('success')}</h2>
                    <Link
                        href="/"
                        className="inline-block mt-6.5 border border-navy/25 text-navy px-6.5 py-3.5 rounded-full font-semibold"
                    >
                        {cp('backHome')}
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5" noValidate>
                    <div>
                        <label htmlFor="name" className="block mb-1.5 text-[13.5px] font-semibold text-navy">
                            {f('name')}
                        </label>
                        <Input
                            id="name"
                            type="text"
                            placeholder={f('namePlaceholder')}
                            aria-invalid={!!errors.name}
                            {...register('name', { required: f('errors.nameRequired') })}
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1.5">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1.5 text-[13.5px] font-semibold text-navy">
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
                        {errors.email && <p className="text-red-600 text-sm mt-1.5">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="projectType" className="block mb-1.5 text-[13.5px] font-semibold text-navy">
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
                            <p className="text-red-600 text-sm mt-1.5">{errors.projectType.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1.5 text-[13.5px] font-semibold text-navy">
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
                        {errors.message && <p className="text-red-600 text-sm mt-1.5">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-navy text-white py-4 rounded-full font-bold text-[15.5px] mt-1 transition hover:bg-navy-dark disabled:opacity-60"
                    >
                        {isSubmitting ? f('submitting') : f('submit')}
                    </button>

                    {submitError && <p role="alert" className="text-red-600 text-sm text-center">{f('error')}</p>}
                </form>
            )}
        </div>
    )
}
