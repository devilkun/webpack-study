const path = require('path')
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  // 文件的输入

  entry: path.join(__dirname, "src/index.js"),

  //文件的输出

  output: {
    filename: "bundle.js",

    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /.vue$/, //此为正则表达式,目的是为了识别.vue结尾的文件

        loader: ['vue-loader','style-loader']
      }
    ]
  },
  plugins: [
      new VueLoaderPlugin()
  ]
};