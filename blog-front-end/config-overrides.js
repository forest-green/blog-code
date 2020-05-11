/* config-overrides.js */
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
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
  // addLessLoader({
  //   lessOptions: {
  //     javascriptEnabled: true,
  //     modifyVars: { '@primary-color': '#1DA57A' },
  //   }
  // }),
  addLessLoader({
    javascriptEnabled: true,        
    modifyVars: { 
      '@primary-color': '#1DA57A' 
    } 
  }),
  addWebpackAlias({
    '@': resolve('./src')
  }),
  addDecoratorsLegacy()
) 
