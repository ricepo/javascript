module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es2016'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    strict: 2
  }
};
