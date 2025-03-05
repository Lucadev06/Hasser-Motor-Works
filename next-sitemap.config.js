/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hassermotorworks.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/hasser-motor-works.netlify.app/',
      },
    ],
  },
};
