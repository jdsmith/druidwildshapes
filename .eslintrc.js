module.exports = {
    extends: "eslint-config-airbnb",
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            node: true,
        },
    },
    rules: {
        'arrow-parens': [1, 'as-needed'],
        'block-scoped-var': 1,
        'comma-dangle': ['error', 'always-multiline'],
        'global-require': 1,
        'no-param-reassign': 0,
        'no-confusing-arrow': ['error', {allowParens: true}],
        "prefer-destructuring": 2,
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
            },
        ],
        'max-statements': [1, 30],
        'no-underscore-dangle': [
            2,
            {
                allow: ['__INITIAL_STATE__'],
                allowAfterThis: true,
            },
        ],
        'padded-blocks': [1, 'never'],
        strict: [1, 'never'],
        'max-len': ['error', { code: 200 }],
        'linebreak-style': 0,
        'no-plusplus': 1,
        'no-nested-ternary': 0,
    },
    globals: {},
    "env": {
        "mocha": true
      }
};
