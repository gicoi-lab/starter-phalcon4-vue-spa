var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  runtimeCompiler: true,
  filenameHashing: false,
  chainWebpack: config => {
    // Not naming bundle 'app'
    config.resolve.alias
        .set('@', resolve('src'))
        .set('~', __dirname);
    config.resolve.extensions.prepend('.vue');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');

    /*
    config
      .plugin('html')
      .tap(args => {
        // args[0].template = 'public/index.js';
     main.js   //args[0].inject = false;
        //args[0].cache = false;
        args[0].minify = true;
        //args[0].filename = 'index.php';
        return args;
      });
     */
  },
  configureWebpack: {
    /*
    optimization: {
      splitChunks: false
    }
     */
  },
  pages: {
    xptSpaPlugin: {
      template: "public/index.html",
      entry: 'src/main-app.js',
      filename: 'index.html'
    }
  },
  indexPath: 'index.html',
  productionSourceMap: false
};
