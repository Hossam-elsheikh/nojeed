import { cn } from '@/lib/utils'

interface SectionHeadingProps {
    eyebrow?: string
    title: string
    subtitle?: string
    center?: boolean
    light?: boolean
    className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, center, light, className }: SectionHeadingProps) {
    return (
        <div className={cn('flex flex-col gap-3.5', center && 'items-center text-center', className)}>
            {eyebrow && (
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {eyebrow}
                </span>
            )}
            <h2 className={cn('font-serif font-medium max-w-2xl', light ? 'text-white' : 'text-navy')}>{title}</h2>
            {subtitle && (
                <p className={cn('max-w-xl', light ? 'text-white/70' : 'text-muted')}>{subtitle}</p>
            )}
        </div>
    )
}
