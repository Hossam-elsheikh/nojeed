export const portfolioProjects = [
    {
        key: 'pharmacySolutions',
        image: '/images/last/pharmasolutions.webp',
        gallery: ['/images/portfolio/pharmacy-solutions/image1.png'],
        href: 'https://pharmasolutionskw.com',
    },
    {
        key: 'fekrativity',
        image: '/images/last/fekrativity.webp',
        gallery: ['/images/portfolio/fekrativity/fekrativity.png'],
        href: 'https://www.fekrativity.com/',
    },
    {
        key: 'wildOasis',
        image: '/images/last/wildoasis.webp',
        gallery: ['/images/portfolio/wild-oasis/wild-oasis-1.png', '/images/portfolio/wild-oasis/wild-oasis-4.png'],
        href: 'https://wild-oasis-mz.vercel.app/',
    },
    {
        key: 'beautyCenter',
        image: '/images/last/beautycenter.webp',
        gallery: ['/images/portfolio/beauty/image.png'],
        href: 'https://beauty-center-nine.vercel.app/',
    },
    {
        key: 'ezyRent',
        image: '/images/last/ezyrent.webp',
        gallery: [],
        href: 'https://ezy-rent-six.vercel.app/',
    },
    {
        key: 'keyper',
        image: '/images/last/keyper.webp',
        gallery: [],
        href: 'https://keyper-nu.vercel.app/en',
    },
    {
        key: 'discoverEgypt',
        image: '/images/last/egypt.webp',
        gallery: [],
        href: 'https://egypt-explorer-ten.vercel.app/en',
    },
] as const

export type ProjectKey = (typeof portfolioProjects)[number]['key']
