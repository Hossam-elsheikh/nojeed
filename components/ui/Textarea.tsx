import { cn } from '@/lib/utils'

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                'w-full rounded-xl px-4 py-3 bg-white border border-navy/20 text-navy placeholder:text-subtle focus:outline-none focus:border-teal-bright focus:ring-3 focus:ring-teal-bright/15 resize-none',
                className
            )}
            {...props}
        />
    )
}
