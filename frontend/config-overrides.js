const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = function override(config, env) {
  // Set up React Hot Loader
  config = rewireReactHotLoader(config, env);
  config.resolve.alias["react-dom"] = "@hot-loader/react-dom";

  return config;
};
