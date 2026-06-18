import { cn } from '@/lib/utils'

interface SectionHeadingProps {
    eyebrow?: string
    title: string
    subtitle?: string
    center?: boolean
    className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, center, className }: SectionHeadingProps) {
    return (
        <div className={cn('flex flex-col gap-3', center && 'items-center text-center', className)}>
            {eyebrow && (
                <span className="w-fit rounded-full bg-white/10 px-4 py-1.5 text-sm text-accent">{eyebrow}</span>
            )}
            <h2 className="font-bold text-foreground max-w-2xl">{title}</h2>
            {subtitle && <p className="text-white/60 max-w-xl">{subtitle}</p>}
        </div>
    )
}
