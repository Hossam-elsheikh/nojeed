import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import type { ProductSlug } from '@/lib/data/products'

export async function ProductTermsLink({
    slug,
    className = 'inline-flex text-sm font-semibold text-teal underline underline-offset-4',
}: {
    slug: ProductSlug
    className?: string
}) {
    const t = await getTranslations('productTermsPage')

    return (
        <Link
            href={{ pathname: '/products/[slug]/terms', params: { slug } }}
            className={className}
        >
            {t('linkLabel')}
        </Link>
    )
}
