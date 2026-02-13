/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nodeplain.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/icon.png', '/opengraph-image.png'], // Add any excluded paths here
}
