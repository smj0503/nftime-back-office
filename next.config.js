/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
    trailingSlash: true,
    images: {
        loader: 'akamai',
        path: '/',
    },
    output: 'export',
}