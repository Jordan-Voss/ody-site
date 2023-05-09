// const { override } = require("customize-cra");
// const babelPlugin = require("babel-plugin-transform-remove-console");

// module.exports = override((config) => {
//   // Add the following lines to add an appropriate loader to handle the .mjs file type
//   config.module.rules.push({
//     test: /\.mjs$/,
//     include: /node_modules/,
//     type: "javascript/auto",
//   });

//   // Add the following lines to remove console.log statements from the build output
//   const minimizer = config.optimization.minimizer;
//   if (minimizer && minimizer.length > 0) {
//     const plugins = minimizer[0].options.terserOptions.plugins;
//     plugins.push(babelPlugin);
//   }

//   return config;
// });
