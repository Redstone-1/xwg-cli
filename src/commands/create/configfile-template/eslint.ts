export default
`{
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    <% if (language === 'typescript') { -%>
      "plugin:@typescript-eslint/recommended",
    <% } else if (framework === 'vue') { -%>
      "plugin:vue/vue3-essential",
    <% } -%>
    <% if (framework === 'react' && language === 'typescript') { -%>
    "plugin:react/recommended",
    <% } else if (framework === 'react' && language !== 'typescript') { -%>
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended"
    <% } -%>
  ],
  "overrides": [],
  <% if (framework === 'react' && language !== 'typescript') { -%>
  "settings": {
    "react": {
      "version": "18.2"
    }
  },
  <% } else if (framework === 'vue') { -%>
  "parser": "vue-eslint-parser",
  <% } -%>
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    <% if (framework === 'react' && language !== 'typescript') { -%>
    "react-refresh",
    <% } else if (framework === 'react' && language === 'typescript') { -%>
    "react",
    <% } else if (framework === 'vue') { -%>
    "eslint-plugin-vue",
    <% } %>
    <% if (language === 'typescript') { -%>
    "@typescript-eslint",
    <% } -%>
  ],
  "rules": {
    "no-undef": 2,
    "no-use-before-define": 2,
    "no-redeclare": 2
  }
}
`;
