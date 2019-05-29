const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32 	//基准大小 baseSize，需要和rem.js中相同
})

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath:'./',
  pages: {
    workBench: {
      entry: 'src/pages/workBench/workBench.js',

      template: 'public/index.html',

      filename: 'workBench.html',

      title: '我的工作台',

      chunks: ['vendors', 'commons', 'async-commons', 'workBench']
    },
    business: {
      entry: 'src/pages/business/business.js',

      template: 'public/index.html',

      filename: 'business.html',

      title: '业务专题',

      chunks: ['vendors', 'commons', 'async-commons', 'business']

    },
    publicity: {
      entry: 'src/pages/publicity/publicity.js',

      template: 'public/index.html',

      filename: 'publicity.html',

      title: '公示',

      chunks: ['vendors', 'commons', 'async-commons', 'publicity']

    },
    supervision: {
      entry: 'src/pages/supervision/supervision.js',

      template: 'public/index.html',

      filename: 'supervision.html',

      title: '督办代办',

      chunks: ['vendors', 'commons', 'async-commons', 'supervision']

    },
    random: {
      entry: 'src/pages/random/random.js',

      template: 'public/index.html',

      filename: 'random.html',

      title: '双随机',

      chunks: ['vendors', 'commons', 'async-commons', 'random']

    },
    manage: {
      entry: 'src/pages/manage/manage.js',

      template: 'public/index.html',

      filename: 'manage.html',

      title: '用户管理',

      chunks: ['vendors', 'commons', 'async-commons', 'manage']
    },
    login: {
      entry: 'src/pages/login/login.js',

      template: 'public/index.html',

      filename: 'login.html',

      title: '登录',
      chunks: ['vendors', 'commons', 'async-commons', 'manage']
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
  ],

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        splitChunks: {
          chunks: 'all',   // initial、async和all
          minSize: 30000,   // 形成一个新代码块最小的体积
          maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
          maxInitialRequests: 3,   // 最大初始化请求数
          automaticNameDelimiter: '~',   // 打包分割符
          name: true,
          cacheGroups: {
            vendors: { // 项目基本框架等
              chunks: 'all',
              test: /(vue|babel-polyfill)/,
              priority: 100,
              name: 'vendors',
            },
            'async-commons': {  // 异步加载公共包、组件等
              chunks: 'async',
              minChunks: 2,
              name: 'async-commons',
              priority: 90,
            },
            commons: { // 其他同步加载公共包
              chunks: 'all',
              minChunks: 2,
              name: 'commons',
              priority: 80,
            },
          }
        }
      }
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
          threshold: 10240,//文件大小大于这个值时启用压缩
          deleteOriginalAssets: false//压缩后保留原文件
        })
      );
    }
    else {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    config.externals = {
      "echarts": "echarts"
    }
  },
}