import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ScreenCropProps {
    src: string
    alt: string
    priority?: boolean
    className?: string
    /** Height relative to width. Anything wider than 9:16 crops the bottom off the shot. */
    ratio?: string
    sizes?: string
}

/** The cream the screenshots are painted on, so the frame never shows a seam. */
const screenBg = '#e7e2d9'

/**
 * A screenshot cropped into a card: full width of the screen, anchored to the
 * top, with whatever falls past the ratio cut off.
 */
export function ScreenCrop({ src, alt, priority, className, ratio = '4 / 5', sizes = '420px' }: ScreenCropProps) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-[20px] border border-navy/10 shadow-[0_22px_50px_-24px_rgba(22,36,63,0.45)]',
                className
            )}
            style={{ aspectRatio: ratio, backgroundColor: screenBg }}
        >
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        </div>
    )
}
