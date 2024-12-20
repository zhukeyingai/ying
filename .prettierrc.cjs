// 配置可参考 https://prettier.io/en/configuration.html
module.exports =  {
  // 使用较大的打印宽度，因为 Prettier 的换行设置似乎是针对没有注释的 JavaScript.
  printWidth: 110,

  // 使用 .gitattributes 来管理换行
  endOfLine: 'auto',

  // 单引号代替双引号
  singleQuote: true,

  // "avoid" - Omit parens when possible. Example: x => x
  arrowParens: 'avoid',

  // tailwind 类名排序 规则https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted
  // plugins: [require('prettier-plugin-tailwindcss')],
};
