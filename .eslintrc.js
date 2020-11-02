module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      ,
      {
        endOfLine: 'auto'
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/no-danger': 0,
    'react/no-unescaped-entities': 0
  }
};
