const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");

// TODO Update config for optimization
module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: path.join(__dirname, "/src/index.tsx"),
    output: {
      filename: "build.js",
      path: path.join(__dirname, "/dist"),
      publicPath: "/",
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },

        {
          test: /\.s[ac]ss$/i,
          use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ["file-loader?name=[name].[ext]"],
        },
      ],
    },
    node: {
      fs: "empty",
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCSSExtractPlugin(),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
