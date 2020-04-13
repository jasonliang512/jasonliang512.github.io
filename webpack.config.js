const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const purgecss = require("@fullhuman/postcss-purgecss");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    bundle: ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                require("tailwindcss"),
                require("autoprefixer"),
                ...(prod
                  ? [
                      purgecss({
                        content: ["./public/index.html", "./src/**/*.svelte"],
                        defaultExtractor: (content) => {
                          const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
                          let matchedTokens = [];
                          let match = regExp.exec(content);

                          while (match) {
                            if (match[0].startsWith('class:')) {
                              matchedTokens.push(match[0].substring(6));
                            } else {
                              matchedTokens.push(match[0]);
                            }

                            match = regExp.exec(content);
                          }

                          return matchedTokens;
                        }
                      }),
                    ]
                  : []),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.yaml$/,
        type: "json",
        use: "yaml-loader",
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devtool: prod ? false : "source-map",
};