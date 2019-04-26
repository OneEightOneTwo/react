const path = require('path');

const config = {
    mode: "development",
    // 导入
    entry: './src/index.js',
    // 导出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 加载器 处理非JS文件
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // .eno文件全部交给./loaders/index.js处理
            { test: /\.eno$/, use: './src/loaders/eno.js' },
            { test: /\.lemon$/, use: './src/loaders/lemon.js' }
        ]
    }
};

module.exports = config;