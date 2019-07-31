'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var sass = require('gulp-sass');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('sass', function() {
  gulp.src('src/app/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/app/'))
});
gulp.task('watch', ['inject'], function () {

  gulp.watch('src/app/**/*.scss', ['sass']);

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

  gulp.watch(path.join(conf.paths.src, '/app/**/*.css'), function(event) {
    if(isOnlyChange(event)) {
      browserSync.reload(event.path);
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
