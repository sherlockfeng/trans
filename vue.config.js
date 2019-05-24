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

    },
    random: {
      entry: 'src/pages/random/random.js',

      template: 'public/index.html',

      filename: 'random.html',

      title: '双随机',

    },
    manage: {
      entry: 'src/pages/manage/manage.js',

      template: 'public/index.html',

      filename: 'manage.html',

      title: '用户管理',

    },
    login: {
      entry: 'src/pages/login/login.js',

      template: 'public/index.html',

      filename: 'login.html',

      title: '登录',

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
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}