var path = require('path');
// var webpack=require('webpack');
// var HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    //项目入口
    entry: "./src/main.ts",
    //输出设置
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    //调试工具
    devtool: "source-map",
    //模块加载器设置
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'awesome-typescript-loader',
              exclude: /node_modules/
            }
          ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    //调试服务
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 7777
    },
    //插件
    plugins: [
        // new HtmlWebPackPlugin(
        //     {
        //         title: "threejs_practise"
        //     }),
        // new webpack.ProvidePlugin({
        //     'THREE': require.resolve('three')
        //   }),
    ]

}