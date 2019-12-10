const {
  override,
  babelExclude,
  babelInclude,
  disableEsLint,
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

module.exports = {
  webpack: function customiseWebpack(config, env) {
    // Set up React Hot Loader
    config = rewireReactHotLoader(config, env);
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';

    return override(
      // Add support for transpiling local package imports
      babelInclude([
        path.resolve('src'),
        path.resolve('../backend'),
        path.resolve('../universal'),
      ]),
      babelExclude([
        path.resolve('../backend/node_modules'),
        path.resolve('../universal/node_modules'),
      ]),
      // Disable CRA lint in favour of project lint
      disableEsLint(),
    )(config, env);
  },
};
