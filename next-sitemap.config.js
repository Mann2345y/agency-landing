/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://dunetech.net", // Replace with your actual domain
  generateRobotsTxt: true, // Generate robots.txt file
  generateIndexSitemap: false, // Set to true for large sites
  exclude: ["/api/*", "/admin/*"], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path, // The URL location
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
