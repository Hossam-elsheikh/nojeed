import { useEffect, useState, useRef } from 'react'

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const elementRef = useRef<HTMLElement | null>(null)

    const updateMousePosition = (event: MouseEvent) => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect()
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            })
        }
    }

    useEffect(() => {
        const element = elementRef.current
        if (element) {
            element.addEventListener('mousemove', updateMousePosition)

            return () => {
                element.removeEventListener('mousemove', updateMousePosition)
            }
        }
    }, [])

    return { mousePosition, elementRef }
}
