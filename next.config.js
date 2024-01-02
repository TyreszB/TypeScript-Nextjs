/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/next.config");

// Added config for shopify in the next config settings

const nextConfig = withFrameworkConfig({
  framework: {
    name: "shopify",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

module.exports = nextConfig;
