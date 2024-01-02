const path = require("path");
const merge = require("deepmerge");

const ALLOWED_FW = ["shopify"];

function withFrameworkConfig(defaultConfig = {}) {
  const framework = defaultConfig?.framework?.name;

  if (!framework)
    throw new Error(
      "The Api framework is missing, plaese add a valid provider!"
    );

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `The Api framework: ${framework}, can not be found. Please use allowed frameworks: ${ALLOWED_FW}`
    );
  }
  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));

  const config = merge(defaultConfig, frameworkNextConfig);

  return config;
}

module.exports = { withFrameworkConfig };
