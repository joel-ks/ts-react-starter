require("webpack");
const { mergeWithRules } = require("webpack-merge");
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript').default;

const common = require("./webpack.config");

// https://github.com/survivejs/webpack-merge#mergewithrules
// To support customizing ts-loader for react-refresh
const merge = mergeWithRules({
    module: {
        rules: {
            test: "match",
            use: {
                loader: "match",
                options: "replace",
            },
        },
    },
});

// Use webpack-merge to merge the common configuration into this.
module.exports = merge(common, {
    // Sets some configuration for building a development bundle
    // More info here: https://webpack.js.org/configuration/mode/#usage
    mode: "development",

    // Generate source maps for easier debugging (the browser console will show the original filename and line number)
    // https://webpack.js.org/configuration/devtool/
    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: [{
                    loader: "ts-loader",
                    // https://github.com/pmmmwh/react-refresh-webpack-plugin/#with-ts-loader
                    options: {
                        getCustomTransformers: () => ({ before: [ReactRefreshTypeScript()] })
                    }
                }]
            }
        ]
    },

    // Configure a development server with hot reloading. This will watch the files included in the bundle, rebuild the
    // bundle when they're modified, and trigger a refresh of the page in the browser.
    devServer: {
        port: 8080,
        contentBase: "./src/static",
        hot: true
    },

    // React-refresh gives us hot reloading of React components
    plugins: [
        new ReactRefreshPlugin()
    ]
});
