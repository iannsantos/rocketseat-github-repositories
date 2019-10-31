module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    // sobrescrevendo as regras do airbnb

    // apontar todas as coisas que não estiverem de acordo como um erro
    'prettier/prettier': 'error',
    // alterar a extensão padrão do airbnb (jsx) para js
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    // quando tiver apenas um export, não obrigar a ser export default
    'import/prefer-default-export': 'off'
  },
};
