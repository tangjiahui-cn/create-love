// ts-rules: https://typescript-eslint.io/rules/no-explicit-any/
// es-rules: https://eslint.org/docs/latest/rules/no-console

module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    // typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // react
    'react/react-in-jsx-scope': 'off',

    // common
    semi: 'error',
    quotes: ['error', 'single'],
    'no-debugger': 'error',
    'no-inner-declarations': 'off',
  },
};
