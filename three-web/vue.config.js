module.exports = {
  publicPath : './',
  outputDir: 'dist', // 打包的目录
  lintOnSave: false, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  devServer: {
    port: 8088, // 服务端口
  }
}