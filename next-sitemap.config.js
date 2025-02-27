/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hassermotorworks.com', // Tu dominio principal
  generateRobotsTxt: true, // Genera robots.txt automáticamente
  additionalPaths: async (config) => [
    {
      loc: '/favicon.ico',
      lastmod: new Date().toISOString(),
    },
  ],
};
