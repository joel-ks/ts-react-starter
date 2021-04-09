require("webpack");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.config");

// Use webpack-merge to merge the common configuration into this.
module.exports = merge(common, {
    // Sets some configuration for building a production bundle
    // More info here: https://webpack.js.org/configuration/mode/#usage
    mode: "production",

    // Generate source maps for easier debugging (the browser console will show the original filename and line number)
    // https://webpack.js.org/configuration/devtool/
    devtool: "source-map",

    // Optimization for the production bundle
    optimization: {
        // Use TerserJS to minify and obfuscate the production code.
        minimizer: [new TerserPlugin()]
    }
});
