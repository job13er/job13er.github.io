module.exports = function({config}) {
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            bracketSpacing: false,
            printWidth: 120,
            semi: false,
            singleQuote: true
          }
        }
      }
    ],
    enforce: 'pre'
  })

  return config
}
