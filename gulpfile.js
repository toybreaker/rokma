'use strict';
// images task to optimize images.
var gulp         = require('gulp');
var responsive   = require('gulp-responsive');
var imagemin     = require('gulp-imagemin');


// Reponsive sizing DEFAULT
gulp.task('default', function () {
  return gulp.src('./BIM/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        //nexus5
        width: 640,
        quality: 61,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        //ipad
        width: 1024,
        quality: 66,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //average laptop screen
        width: 1680,
        quality: 66,
        progressive: true,
        rename: {
          suffix: '-1680'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 71,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }]
    }))
    .pipe(gulp.dest('./BAM/'));
});

// variations on DEFAULT gulp task
gulp.task('bim', function () {
  return gulp.src('./BIM/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        //average laptop screen
        width: 1680,
        quality: 33,
        progressive: true,
        rename: {
          prefix: 'islander-1680-'
        }
      }]
    }))
    .pipe(gulp.dest('./BUM/'));
});

// SQUEEZE 'em
gulp.task('bum', () =>
    gulp.src('./BUM/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./BAM'))
);
