const createJestConfig = require('react-scripts/scripts/utils/createJestConfig');

const rootDir = __dirname;
const resolveReactScriptsModule = reactScriptsPath =>
  require.resolve(`react-scripts/${reactScriptsPath}`);
const isEjecting = false;

module.exports = {
  ...createJestConfig(resolveReactScriptsModule, rootDir, isEjecting),
  displayName: 'frontend',
};
