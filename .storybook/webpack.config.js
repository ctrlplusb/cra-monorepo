module.exports = ({ config, mode }) => {
  // remove the linting config
  config.module.rules = config.module.rules.filter(x => x.enforce !== 'pre');
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
