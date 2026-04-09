module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source map warnings
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
      ];
      return webpackConfig;
    },
  },
};

