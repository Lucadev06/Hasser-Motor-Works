/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hassermotorworks.com', 
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    {
      loc: '/favicon.ico',
      lastmod: new Date().toISOString(),
    },
  ],
};
