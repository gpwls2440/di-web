module.exports = {
  extends: [
    './node_modules/@kbam-frontend/lint',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['@tanstack/query'],
  rules: {
    '@tanstack/query/exhaustive-deps': 0,
    '@tanstack/query/prefer-query-object-syntax': 0,
    'no-underscore-dangle': 0,
  },
  ignorePatterns: [
    'src/services/signOn.ts',
    'src/services/auth.ts',
    'src/services/base.ts',
  ],
};
