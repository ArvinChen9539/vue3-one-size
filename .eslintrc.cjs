/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    //部分类型识别错误,关闭未定义的检查使用tslint的
    "no-undef": 0,
    //关闭组件必须使用多个单词定义的约束
    "vue/multi-word-component-names": 0
  }
};
