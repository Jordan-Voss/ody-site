const path = require("path");

module.exports = function override(config) {
  // Add the following lines to add an appropriate loader to handle the .mjs file type
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

  // Add the following lines to remove console.log statements from the build output
  const plugins =
    config.optimization.minimizer[0].options.terserOptions.plugins;
  plugins.push(require("babel-plugin-transform-remove-console"));

  return config;
};
