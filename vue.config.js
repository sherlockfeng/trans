const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32 	//基准大小 baseSize，需要和rem.js中相同
})

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

    },
    publicity: {
      entry: 'src/pages/publicity/publicity.js',

      template: 'public/index.html',

      filename: 'publicity.html',

      title: '公示',

    },
    supervision: {
      entry: 'src/pages/supervision/supervision.js',

      template: 'public/index.html',

      filename: 'supervision.html',

      title: '督办代办',

    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}