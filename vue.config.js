// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const Setting = require('./src/setting.ts');

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, on Mac: sudo npm run / sudo yarn
const devServerPort = 8080; // TODO: get this variable from setting.ts
const name = Setting.title || 'Vue Typescript Admin'; // TODO: get this variable from setting.ts

// https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/companyName/' : '/',
  // http://www.ruanyifeng.com/blog/2014/05/restful_api.html
  outputDir: 'dist/web/v1.0/companyName/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: devServerPort,
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    progress: false,
    proxy: `http://localhost:8001`,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/app/layout/style/layout-variables.scss')],
    },
  },
  chainWebpack(config) {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name);

    // https://webpack.js.org/configuration/devtool/#development
    config.when(process.env.NODE_ENV === 'development', (config) => config.devtool('cheap-eval-source-map'));

    // remove vue-cli-service's progress output
    config.plugins.delete('progress');
    // replace with another progress output plugin to solve the this bug:
    // https://github.com/vuejs/vue-cli/issues/4557
    config.plugin('simple-progress-webpack-plugin').use(require.resolve('simple-progress-webpack-plugin'), [
      {
        format: 'compact',
      },
    ]);

    config.when(process.env.NODE_ENV !== 'development', (config) => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: path.resolve(__dirname, 'src/app/components'),
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });
  },
};
