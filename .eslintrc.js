module.exports = {
  env: { browser: true },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Vue: 'readonly',
    swal: 'readonly',
    Howl: 'readonly',
  },
  rules: {
    indent: ['error', 2, { MemberExpression: 0 }],
    'no-trailing-spaces': 'error',
    'no-plusplus': 'off',
    'no-new': 'off',
    'object-curly-newline': 'off',
  },
};
