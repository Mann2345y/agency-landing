/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://dunetech.vercel.app", // Replace with your actual domain
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
    additionalSitemaps: [
      "https://dunetech.vercel.app/server-sitemap-index.xml", // For dynamic sitemaps
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
