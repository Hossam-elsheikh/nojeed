import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'

const variantClasses: Record<Variant, string> = {
    primary: 'bg-accent text-background hover:bg-accent/80',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-background',
    ghost: 'text-foreground hover:bg-white/10',
}

const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm md:text-base font-medium transition disabled:opacity-60 disabled:pointer-events-none'

interface CommonProps {
    variant?: Variant
    className?: string
    children: React.ReactNode
}

interface LinkButtonProps extends CommonProps {
    href: string
    type?: never
    onClick?: never
    disabled?: never
}

interface NativeButtonProps extends CommonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
    href?: never
}

type ButtonProps = LinkButtonProps | NativeButtonProps

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    const classes = cn(baseClasses, variantClasses[variant], className)

    if ('href' in props && props.href) {
        const isExternal = /^https?:\/\//.test(props.href)
        return (
            <Link
                href={props.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={classes}
            >
                {children}
            </Link>
        )
    }

    const { href, ...buttonProps } = props as NativeButtonProps
    void href

    return (
        <button className={classes} {...buttonProps}>
            {children}
        </button>
    )
}
