const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      // 但匹配到后缀为js的文件，那就执行loader去处理该类型文件
      test: /\.js$/,
      // 排除node_modules和bower_components里面的所有js文件
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          // 如果需要配置参数注释这条，在 .babelrc上面配置
          // 该插件帮你把jsx内容转为js
          // "plugins": ["transform-react-jsx"]
        }
      }
    }]
  }
};