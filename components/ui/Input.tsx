import { cn } from '@/lib/utils'

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                'w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-foreground placeholder:text-white/40 focus:outline-none focus:border-accent',
                className
            )}
            {...props}
        />
    )
}
