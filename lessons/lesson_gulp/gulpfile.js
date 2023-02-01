function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
function html() {
    return screen('./src/**/*.html').pipe(dest('./dist/'))
}
function watchAll () {
    watch('./src/styles/main/scss', style)
    watch('./src/**/*.html', html)
}


  exports.default = parallel(html, style, watchAll) 