import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl= createNextIntlPlugin()

/** Folders under `public/demos`. */
const demos = ['tabibi']

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    },

    /**
     * Product demos are static, client-routed apps kept in `public/demos/<name>`
     * (built in the product's own repository and copied here). A file that
     * exists is served as it is; any other path under the demo is one of the
     * app's own routes, so it gets the app's page and the app reads the URL.
     */
    async rewrites() {
        return demos.flatMap((name) => [
            { source: `/demos/${name}`, destination: `/demos/${name}/index.html` },
            { source: `/demos/${name}/:path*`, destination: `/demos/${name}/index.html` },
        ])
    },

    /** A demo is a fictional business with invented people: never indexed. */
    async headers() {
        return [
            {
                source: '/demos/:path*',
                headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
            },
        ]
    },
}

export default withNextIntl(nextConfig);
