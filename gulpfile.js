var gulp = require('gulp');
var inline = require('gulp-inline-css');
var browserSync = require('browser-sync');

gulp.task('bs', function() {
  browserSync.init({
    files: "./inlined/*.html",
    server: {
      baseDir: "./inlined",
      directory: true
    },
    notify: true
  });
});

gulp.task('inline', function() {
  return gulp.src('./*.html')
    .pipe(inline({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: false,
      removeLinkTags: true,
      preserveMediaQueries: true
    }))
    .pipe(gulp.dest('./inlined'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('default', ['inline', 'bs'], function() {
  gulp.watch('*.html', ['inline']);
});
