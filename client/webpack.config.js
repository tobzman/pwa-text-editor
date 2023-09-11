const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "../Develop/client/src/js,index.js",
      install: "../Develop/client/src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      // HTML Webpack Plugin
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["main"],
      }),

      // Webpack PWA Manifest Plugin
      new WebpackPwaManifest({
        name: "Your PWA Name",
        short_name: "PWA",
        description: "Your PWA Description",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: path.resolve("./src/assets/icon.png"),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),

      // Workbox Inject Manifest Plugin for Service Worker
      new InjectManifest({
        swSrc: "",
        swDest: "sw.js", // Change to your desired service worker file name
      }),
    ],

    module: {
      rules: [
        // Add CSS loader rules here if needed.
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },

        // Add Babel loader rules here if needed.
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
