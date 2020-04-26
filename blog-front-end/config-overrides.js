/* config-overrides.js */
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
// const rewireCssModules = require('react-app-rewire-css-modules');
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  fixBabelImports('import', {        
    libraryName: 'antd',        
    libraryDirectory: 'es',       
    style: 'css'
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  addWebpackAlias({
    '@': resolve('./src')
  }),
  addDecoratorsLegacy()
) 
// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   //启用ES7的修改器语法（babel 7）
//   // config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config);
//   //css模块化
//   config = rewireCssModules(config, env);
  
//   //配置别名
//   config.resolve.alias = {
//     '@': resolve('src')
//   }

//   // antd按需加载
//   config = injectBabelPlugin(['import', { 
//     libraryName: 'antd', 
//     libraryDirectory: 'es', 
//     style: 'css' 
//   }], config);

//   return config;
// }