import NextLink from 'next/link'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

type Variant = 'accent' | 'dark' | 'outline' | 'outline-light' | 'ghost'

const variantClasses: Record<Variant, string> = {
    accent: 'bg-accent text-navy hover:bg-accent-hover',
    dark: 'bg-navy text-white hover:bg-navy-dark',
    outline: 'border border-navy/25 text-navy hover:border-navy/50',
    'outline-light': 'border border-white/30 text-white hover:border-white/60',
    ghost: 'text-navy hover:bg-navy/5',
}

const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold transition disabled:opacity-60 disabled:pointer-events-none'

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

export function Button({ variant = 'accent', className, children, ...props }: ButtonProps) {
    const classes = cn(baseClasses, variantClasses[variant], className)

    if ('href' in props && props.href) {
        const isExternal = /^(https?:|mailto:|tel:)/.test(props.href)
        if (isExternal) {
            return (
                <NextLink
                    href={props.href}
                    target={props.href.startsWith('http') ? '_blank' : undefined}
                    rel={props.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={classes}
                >
                    {children}
                </NextLink>
            )
        }
        return (
            // @ts-expect-error -- href is a plain internal pathname at runtime
            <Link href={props.href} className={classes}>
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
