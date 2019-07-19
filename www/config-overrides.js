const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

module.exports = function override(config, env) {
  // We remove the module scope plugin so that we can import files from outside
  // of our www/src - which allows much easier code sharing between our APIs
  // and frontend.
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => !(plugin instanceof ModuleScopePlugin)
  );

  return config;
};
