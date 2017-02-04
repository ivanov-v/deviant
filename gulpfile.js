const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const nesting = require('postcss-nesting');
const csso = require('gulp-csso');

gulp.task('styles', () => {
  return gulp.src('./src/styles/root.css')
  .pipe(
    postcss([
      precss(),
      nesting(),
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ])
  )
  .pipe(csso())
  .pipe(gulp.dest('./build/css'));
});

gulp.task('views', () => {
  return gulp.src('./src/views/*.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('images', () => {
  return gulp.src('./src/img/**/*')
  .pipe(gulp.dest('./build/img'));
});

gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.css', ['styles']);
  gulp.watch('./src/views/*.html', ['views']);
  gulp.watch('./src/img/**/*', ['images']);
});

gulp.task('default', ['styles', 'views', 'images'])

