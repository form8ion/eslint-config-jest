module.exports = {
  overrides: [{
    files: '**/*.test.js',

    extends: [
      'plugin:jest/recommended',
      'plugin:jest/style'
    ]
  }]
};
