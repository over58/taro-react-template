module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier' // 排除与 prettier 冲突的 rule
  ],
  plugins: [
    'stylelint-prettier', // 通过插件让 stylelint 检查可以借助 prettierrc 的配置
    'stylelint-order' // 一个关于约束属性编写排序的 plugin
  ],
  rules: {
    'prettier/prettier': true, // 开启
    'max-nesting-depth': 4, // 最大嵌套层级
    'declaration-block-no-duplicate-custom-properties': true,
    'order/properties-order': [
      // 内置属性排序, 所有 css 属性都可排序
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'float',
      'width',
      'height'
    ]
  },
  ignoreFiles: [
    '**/*.json',
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.mp3',
    'dist/**'
  ]
}
