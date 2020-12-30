module.exports = {
  webpack: (config, options) => {
    if (!options.dev) {
      config.resolve.alias['react'] = 'preact/compat';
      config.resolve.alias['react-dom'] = 'preact/compat';
      config.resolve.alias['react/jsx-runtime'] = 'preact/jsx-runtime';
    }

    return config;
  },
};