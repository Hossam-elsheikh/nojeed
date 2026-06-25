'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Select = SelectPrimitive.Root
export const SelectValue = SelectPrimitive.Value

export function SelectTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
    return (
        <SelectPrimitive.Trigger
            className={cn(
                'flex w-full items-center justify-between gap-2 rounded-xl px-4 py-3 bg-white border border-navy/20 text-navy data-[placeholder]:text-subtle focus:outline-none focus:border-teal-bright',
                className
            )}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronDown className="size-4 opacity-60" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
}

export function SelectContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                position="popper"
                sideOffset={4}
                className={cn(
                    'z-50 overflow-hidden rounded-xl bg-white border border-navy/15 text-navy shadow-xl',
                    className
                )}
                {...props}
            >
                <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    )
}

export function SelectItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
    return (
        <SelectPrimitive.Item
            className={cn(
                'relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none cursor-pointer data-[highlighted]:bg-navy/5 data-[state=checked]:text-teal',
                className
            )}
            {...props}
        >
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator className="absolute right-2">
                <Check className="size-4" />
            </SelectPrimitive.ItemIndicator>
        </SelectPrimitive.Item>
    )
}
