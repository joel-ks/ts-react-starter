const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.config");

// Use webpack-merge to merge the common configuration into this.
module.exports = merge(common, {
    // Sets some configuration for building a development bundle
    // More info here: https://webpack.js.org/configuration/mode/#usage
    mode: "development",

    // Generate source maps for easier debugging (the browser console will show the original filename and line number)
    // https://webpack.js.org/configuration/devtool/
    devtool: "inline-source-map",

    // Configure a development server with hot reloading. This will watch the files included in the bundle, rebuild the
    // bundle when they're modified, and trigger a refresh of the page in the browser.
    devServer: {
        port: 8080,
        contentBase: "./src/static",
        hot: true
    },

    // Configure hot module replacement so code for individual modules can be hot-swapped when they're rebuilt instead
    // of requiring a page refresh. Works in conjunction with the dev server and its hot-reloading.
    plugins: [new webpack.HotModuleReplacementPlugin()],

    // To support react-hot-loader
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    }
});
