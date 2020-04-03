module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-storysource"],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            modules: true,
            importLoaders: 1,
            modules: {
              localIdentName: "[name]--[local]"
            }
          }
        },
        require.resolve("sass-loader")
      ]
    });
    return config;
  }
};
