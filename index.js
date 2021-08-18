module.exports = {
  book: {
    assets: './assets',
    js: ['plugin.js'],
    css: ['plugin.css']
  },
  hooks: {
    'page:before': function(page) {
      var str = '<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>'
      page.content += str
      return page
    }
  }
}
