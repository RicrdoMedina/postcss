let gulp = require('gulp')
let postcss = require('gulp-postcss')
let browserSync = require('browser-sync').create()

// Server de desarrollo
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
})

//Tarea para procesar el css
gulp.task('css', function () {
  let processor = []
  return gulp.src('./src/*.css')
    .pipe(postcss(processor))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

//Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'server'])
