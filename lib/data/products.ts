import {
    Wallet,
    Users,
    Smartphone,
    Languages,
    Repeat,
    Target,
    LineChart,
    BellRing,
    LayoutGrid,
    Award,
    Moon,
    BookOpen,
    Flame,
    GraduationCap,
    PhoneCall,
    Dumbbell,
} from 'lucide-react'

export const products = [
    {
        key: 'nabih',
        slug: 'nabih',
        icon: '/images/products/nabih/icon.png',
        siteHref: 'https://nabih.nojeed.me',
        storeHref: 'https://play.google.com/store/apps/details?id=com.nabih.app',
    },
    {
        key: 'school360',
        slug: 'school-360',
        logo: '/images/products/school360/logo.png',
        mark: '/images/products/school360/mark.png',
        icon: '/images/products/school360/modules/school-setup.svg',
    },
] as const

export type ProductSlug = (typeof products)[number]['slug']
export type ProductKey = (typeof products)[number]['key']

/* -------------------------------------------------------------------------- */
/*  Nabih                                                                      */
/* -------------------------------------------------------------------------- */

const nabihScreen = (locale: string, file: string) =>
    `/images/products/nabih/screens/${locale === 'ar' ? 'ar' : 'en'}/${file}.png`

export const nabih = {
    ...products[0],
    screen: nabihScreen,
} as const

/** The three engines every tracked area in Nabih is built on. */
export const nabihPrimitives = [
    { key: 'recurring', icon: Repeat },
    { key: 'progress', icon: Target },
    { key: 'log', icon: LineChart },
] as const

/** Areas a user can switch on — each one is a config file, not a screen. */
export const nabihAreas = [
    { key: 'prayers', icon: Moon },
    { key: 'quran', icon: BookOpen },
    { key: 'habits', icon: Flame },
    { key: 'books', icon: GraduationCap },
    { key: 'spending', icon: Wallet },
    { key: 'people', icon: PhoneCall },
    { key: 'exercise', icon: Dumbbell },
] as const

/** Feature rows, each paired with the screen that shows it. */
export const nabihFeatures = [
    { key: 'rhythm', screen: 'people' },
    { key: 'finishLine', screen: 'books' },
    { key: 'ceiling', screen: 'expenses' },
    { key: 'summary', screen: 'summary' },
] as const

export const nabihQuiet = [
    { key: 'notifications', icon: BellRing },
    { key: 'widgets', icon: LayoutGrid },
    { key: 'marks', icon: Award },
] as const

export const nabihPrivacy = ['signup', 'tracking', 'ads', 'backup', 'internet'] as const

export const nabihDialects = ['msa', 'egyptian', 'saudi', 'levantine', 'moroccan'] as const
export const nabihLanguages = ['english', 'french', 'german'] as const

/* -------------------------------------------------------------------------- */
/*  School 360                                                                 */
/* -------------------------------------------------------------------------- */

export const school360 = products[1]

const moduleIcon = (file: string) => `/images/products/school360/modules/${file}.svg`

export const productModules = [
    { key: 'admissions', icon: moduleIcon('admissions') },
    { key: 'students', icon: moduleIcon('students') },
    { key: 'academic', icon: moduleIcon('academic') },
    { key: 'exams', icon: moduleIcon('exams') },
    { key: 'calendar', icon: moduleIcon('calendar') },
    { key: 'communication', icon: moduleIcon('communication') },
    { key: 'discussion', icon: moduleIcon('discussion') },
    { key: 'library', icon: moduleIcon('library') },
    { key: 'transport', icon: moduleIcon('transport') },
    { key: 'hostel', icon: moduleIcon('hostel') },
    { key: 'schoolSetup', icon: moduleIcon('school-setup') },
] as const

export const alsoIncluded = [
    { key: 'attendance', icon: moduleIcon('attendance') },
    { key: 'fees', icon: moduleIcon('fees') },
    { key: 'hr', icon: moduleIcon('hr') },
    { key: 'canteen', icon: moduleIcon('canteen') },
] as const

export const productFeatures = [
    { key: 'portal', icon: Users },
    { key: 'mobileApp', icon: Smartphone },
    { key: 'arabic', icon: Languages },
] as const
