const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = {
  jest: function customiseJest(config) {
    console.log(config);
    return config;
  },
  webpack: function customiseWebpack(config, env) {
    // Set up React Hot Loader
    config = rewireReactHotLoader(config, env);
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';

    return config;
  },
};
