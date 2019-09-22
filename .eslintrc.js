// http://eslint.org/docs/user-guide/configuring
process.env.NODE_ENV = process.env.NODE_ENV || 'developement'
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    jquery:  true
  },
  'settings': {
    'import/resolver': 'webpack'
  },
  extends: 'standard',
  // add your custom rules here
  'rules': {
    // allow async-await
    'generator-star-spacing': 'off',

    // don't require .js extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never'
    }],

    // allow paren-less arrow functions
    'arrow-parens': 0,

    'no-multiple-empty-lines': ['error', {
      'max': 4
    }],
    'padded-blocks': 0,
    'comma-dangle': 0,
    // custom rules
    // 'func-names': 0,
    // 'no-param-reassign': 0,
    // 'no-empty': ['error', {
    //   'allowEmptyCatch': true
    // }],
    // 'no-underscore-dangle': 0,

    // allow debugger & console during development,
    'no-new': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'no-console': process.env.NODE_ENV === 'production' ? 1 : 0
    'no-useless-catch': 0,
    'object-curly-spacing': 0,
    'no-useless-constructor': 0,
    'no-throw-literal': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0
  }
}
