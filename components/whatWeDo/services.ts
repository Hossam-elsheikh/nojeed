import Terminal from '@/public/icons/services/terminal.svg'
import Puzzle from '@/public/icons/services/puzzle.svg'
import CodeLaptop from '@/public/icons/services/monitor-check.svg'
import WebDesign from '@/public/icons/services/panels-top-left.svg'
import SmartPhoneCoding from '@/public/icons/services/smartphone.svg'
import Sec1 from '@/public/images/services/section1.svg'
import Sec2 from '@/public/images/services/section2.svg'

import UIUX from '@/public/icons/services/paintbrush.svg'
export const servicesArray = [
    {
        id: 1,
        alt: 'Laptop',
        image: Sec1, 
        children: [
            {
                id: 1,
                icon: UIUX, 
                title: 'uiux.title',
                description:
                    "uiux.description",
            },
            {
                id: 2,
                icon: WebDesign,
                title: 'web.title',
                description:
                    'web.description',
            },
            {
                id: 3,
                icon: Puzzle, 
                title: 'custom.title',
                description:
                    'custom.description',
            },
        ],
    },
    {
        id: 2,
        alt: 'Mobile',
        image: Sec2, 
        children: [
            {
                id: 4,
                icon: CodeLaptop, 
                title: 'desktop.title',
                description:
                    'desktop.description',
            },
            {
                id: 5,
                icon: SmartPhoneCoding, 
                title: 'mobile.title',
                description:
                    'mobile.description',
            },
            {
                id: 6,
                icon: Terminal, 
                title: 'auto.title',
                description:
                    'auto.description',
            },
        ],
    },
]
