/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const {
  addBabelPlugin,
  addWebpackPlugin,
  babelExclude,
  babelInclude,
  disableEsLint,
  override,
} = require('customize-cra');
// TODO: Replace with official plugin when it is supported
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = override(
  // Add support for React Fast Refresh
  process.env.NODE_ENV === 'development'
    ? addBabelPlugin('react-refresh/babel')
    : undefined,
  process.env.NODE_ENV === 'development'
    ? addWebpackPlugin(new ReactRefreshPlugin())
    : undefined,
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
);
