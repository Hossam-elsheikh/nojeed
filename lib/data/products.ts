import { Wallet, Briefcase, UtensilsCrossed, CalendarCheck, Users, Smartphone, Languages } from 'lucide-react'

export const product = {
    name: 'School 360',
    slug: 'school-360',
    builtOn: 'Odoo 19',
    logo: '/images/products/school360/logo.png',
} as const

const shot = (file: string) => `/images/products/school360/features/${file}.png`

export const productModules = [
    { key: 'admissions', image: shot('admissions') },
    { key: 'students', image: shot('students') },
    { key: 'academic', image: shot('academic') },
    { key: 'exams', image: shot('exams') },
    { key: 'calendar', image: shot('calendar') },
    { key: 'communication', image: shot('communication') },
    { key: 'discussion', image: shot('discussion') },
    { key: 'library', image: shot('library') },
    { key: 'transport', image: shot('transport') },
    { key: 'hostel', image: shot('hostel') },
    { key: 'schoolSetup', image: shot('school-setup') },
] as const

export const alsoIncluded = [
    { key: 'attendance', icon: CalendarCheck },
    { key: 'fees', icon: Wallet },
    { key: 'hr', icon: Briefcase },
    { key: 'canteen', icon: UtensilsCrossed },
] as const

export const productFeatures = [
    { key: 'portal', icon: Users },
    { key: 'mobileApp', icon: Smartphone },
    { key: 'arabic', icon: Languages },
] as const
