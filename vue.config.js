module.exports = {
  publicPath:'./',
  pages: {
    workBench: {
      entry: 'src/pages/workBench/workBench.js',

      template: 'public/index.html',

      filename: 'workBench.html',

      title: '我的工作台',

    },
    business: {
      entry: 'src/pages/business/business.js',

      template: 'public/index.html',

      filename: 'business.html',

      title: '业务专题',

    }
  }
}