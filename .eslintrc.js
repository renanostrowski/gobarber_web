module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "prettier"
    ],
    "rules": {
      "@typescript-eslint/ban-types": "off",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "no-unused-expressions": "off",
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [1, {"extensions": [".tsx"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
};