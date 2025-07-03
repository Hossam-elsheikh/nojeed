import Terminal from '@/public/terminal.svg'
import Puzzle from '@/public/puzzle.svg'
import SmartPhoneCoding from '@/public/Mobile.svg'
import CodeLaptop from '@/public/Code-Laptop.svg'
import WebDesign from '@/public/coding.svg'
import UiUx from '@/public/web-design.svg'
import MobileIphone from '@/public/mobileIphone.svg'
import Macbook from '@/public/macbook.svg'

export const servicesArray = [
    {
        id: 1,
        alt: 'Laptop',
        image: Macbook, 
        children: [
            {
                id: 1,
                icon: UiUx, 
                title: 'UX/UI Design - Web Design',
                description:
                    "Create an intuitive UX/UI for any web product, tailored to achieve business goals and users' need",
            },
            {
                id: 2,
                icon: WebDesign,
                title: 'Web Development',
                description:
                    'Build modern, responsive, and high-performance websites and web apps tailored to boost your business and engage users',
            },
            {
                id: 3,
                icon: Puzzle, 
                title: 'Custom Software Solutions',
                description:
                    'Tailored systems that solve real problems, backend to frontend',
            },
        ],
    },
    {
        id: 2,
        alt: 'Mobile',
        image: MobileIphone, 
        children: [
            {
                id: 4,
                icon: CodeLaptop, 
                title: 'Desktop Applications',
                description:
                    'Tailored systems that solve real problems, backend to frontend',
            },
            {
                id: 5,
                icon: SmartPhoneCoding, 
                title: 'Mobile App Development',
                description:
                    'Develop high-performance iOS and Android apps, tailored for scalability and user engagement.',
            },
            {
                id: 6,
                icon: Terminal, 
                title: 'Command Line Tools & Automation',
                description:
                    'Develop powerful command-line interfaces and automation scripts for efficient task management and system operations.',
            },
        ],
    },
]
