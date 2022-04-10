module.exports = {
  // 表示当前目录为跟目录
  root: true,
  // 在node环境下启动eslint
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  /**
   * 错误等级分为三种
   * 'off' 或者 0 - 关闭规则
   * 'warn' 或者 1 - 开启规则， 使用警告级别的错误： warn 不会导致程序退出
   * 'error' 或者 2 - 开启规则。 使用错误级别
   * /
   */
  // 错误级别
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // quotes: 'off'
  }
}
