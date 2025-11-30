import globals from 'globals';
import standard from '@jobscale/eslint-plugin-standard';
import jestPlugin from 'eslint-plugin-jest';

export default [{
  ignores: ['**/coverage/**', '**/assets/**', '**/*.min.js'],
}, {
  ...standard.configs.standard,
  name: 'standard base rule',
  rules: {
    ...standard.configs.standard.rules,
  },
}, {
  name: 'jest rule',
  files: ['**/*.test.js', '**/__tests__/**/*.js'],
  languageOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    globals: {
      ...globals.node,
      ...globals.jest,
    },
  },
  plugins: {
    jest: jestPlugin,
  },
  rules: {
    ...jestPlugin.configs.recommended.rules,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
}];
