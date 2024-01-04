const postcss = require("postcss");
const postcssNesting = require("postcss-nesting");

module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};
