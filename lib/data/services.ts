import { Palette, Globe, Smartphone, Boxes, Monitor, Terminal } from 'lucide-react'

export const services = [
    { key: 'uiux', slug: 'uiux', piece: 'pawn', icon: Palette },
    { key: 'web', slug: 'web', piece: 'bishop', icon: Globe },
    { key: 'mobile', slug: 'mobile', piece: 'knight', icon: Smartphone },
    { key: 'custom', slug: 'custom', piece: 'rook', icon: Boxes },
    { key: 'desktop', slug: 'desktop', piece: 'queen', icon: Monitor },
    { key: 'automation', slug: 'automation', piece: 'king', icon: Terminal },
] as const

export type ServiceSlug = (typeof services)[number]['slug']

export const stacksBySlug: Record<ServiceSlug, string[]> = {
    uiux: ['Figma', 'Design tokens', 'Storybook', 'Framer', 'Accessibility audits'],
    web: ['TypeScript', 'React / Next.js', 'Node.js', 'PostgreSQL', 'AWS / GCP', 'Docker'],
    mobile: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'App Store / Play Store CI'],
    custom: ['TypeScript', 'Node / Go / Python', 'PostgreSQL', 'REST / GraphQL APIs', 'Odoo'],
    desktop: ['Electron', '.NET', 'Tauri', 'SQLite', 'Native OS integrations'],
    automation: ['Python', 'Bash', 'Node.js CLIs', 'GitHub Actions', 'Cron & schedulers'],
}
