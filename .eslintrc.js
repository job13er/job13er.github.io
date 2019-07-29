module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': 'off', // conflicts with prettier
    'max-len': 'off', // conflicts with prettier
    'no-extra-semi': 'off', // conflicts with prettier
    'object-curly-spacing': 'off', // conflicts with prettier
    'object-curly-newline': 'off', // conflicts with prettier
    'react/jsx-filename-extension': 'off',
    semi: ['error', 'never'], // conflicts with prettier
    'semi-style': 'off' // conflicts with prettier
  }
}
