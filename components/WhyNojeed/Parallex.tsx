
import { Marquee } from '@/components/magicui/marquee'
import Image from 'next/image'

const reviews1 = [
    {
        id: '1',
        img: '/images/portfolio/dashboard.jpg',
    },
    
    {
        id: '2',
        img: '/images/portfolio/e-commerce.jpg',
    },
    {
        id: '3',
        img: '/images/portfolio/portfolio.png',
    },
]
const reviews2 = [
    {
        id: '4',
        img: '/images/portfolio/dashboard.jpg',
    },
    
    {
        id: '5',
        img: '/images/portfolio/e-commerce.jpg',
    }
]


const ReviewCard = ({ img }: { img: string }) => {
    return (
        <div className="relative w-full h-[420px] mx-2  rounded overflow-hidden">
            <Image src={img} alt="img" fill className="object-cover" />
        </div>
    )
}


export function Parallex() {
    return (
        <div className="relative flex h-[720px] w-full flex-row items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:30s] w-full">
                {reviews1.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:30s] w-full">
                {reviews2.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-main-bg"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-main-bg"></div>
        </div>
    )
}
