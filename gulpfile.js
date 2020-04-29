'use strict';
// GULP tasks to work images.
var changeCase   = require('change-case');
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');
var del          = require('del');

// WHAT: adds folder name + index, lowercasing the original file name.
// set index = 10, if you want to avoid single digit no. in the first 9 files
var index = 0;
gulp.task('renamefiles', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src('./_src/uploads/_files_to_rename/**/*.*')
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (path.dirname + '-' + index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest('./_src/uploads/_files_renamed/'));
});


// WHAT: adds folder name + index, lowercasing the original file name.
// starts from 10, to avoid single digit no. to the first 9 jpgs
var index = 10;
gulp.task('curatename', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src('./_src/uploads/_images_to_rename/**/*.jpg')
  .pipe(rename(function(fix) {
     fix.basename = changeCase.lowerCase(fix.basename);
   }))
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (path.dirname + '-' + path.basename + '-' + index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest('./_src/uploads/_images_to_size/'));
});

// WHAT: delete the original file name + name them using folder name + index .
// to avoid single digit no. to the first 9 jpgs, start from 10, intead of 0
var index = 0;
gulp.task('rename_images', function (done) {
  // put image folders w/ proper name into _images_to_rename
  return gulp.src('./_src/uploads/_images_to_rename/**/*.jpg')
  .pipe(rename(function (path) {
    // prefix w/ folder name + suffix w/ index (starting at 10!)
    path.basename =  (path.dirname + '-' + index++);
  }))
  // output to _images_to_process folder for next step
  .pipe(gulp.dest('./_src/uploads/_images_to_size/'));
});

// Reponsive sizing w/ gulp4
// NOTE: Does transfer folder and lowercase the jpgs names
// OK!
gulp.task('size_images', function (done) {
  return gulp.src('./_src/uploads/_images_to_size/**/*.jpg')
    // .pipe(rename(function(fix) {
    //    fix.basename = changeCase.lowerCase(fix.basename);
    //  }))
    .pipe(responsive({
      '**/*.jpg': [{
        width: 640,
        quality: 55,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        width: 880,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-880'
        }
      }, {
        width: 1024,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 33,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }, {
        //named same as original for use with jekyll_seo Open Graph / Twitter Cards
        width: 1024,
        quality: 44,
        progressive: true
      }],
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      withoutEnlargement: false,
      //try this, sometimes doesn't work
      //withoutChromaSubsampling: true
    }))
    // this is needed otherwise it outputs .jpeg, gosh...
    .pipe(rename(function(fix) {
      fix.extname = '.jpg';
    }))
    // puy jpgs ready in place for SSG to use
    .pipe(gulp.dest('./assets/images/'));
  done();
});

// Rename all to lowercase w/ gulp4
// OK!
gulp.task(function lowercase(done) {
  return gulp.src( './_src/uploads/_images_to_lowercase/**/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))

    .pipe(gulp.dest( './_src/uploads/_images_to_size' ));
  done();
});

// DELETE TASKS

// empty "images_to_lowercase"
gulp.task('delete_images_to_lowercase_dir_content', function(done) {
    del(['./_src/uploads/_images_to_lowercase/**']);
  done();
});

// empty "_images_to_size"
gulp.task('delete_images_to_size_dir_content', function(done) {
    del(['./_src/uploads/_images_to_size/**']);
  done();
});

// empty "_images_to_rename"
gulp.task('delete_images_to_rename_dir_content', function(done) {
    del(['./_src/uploads/_images_to_rename/**']);
  done();
});


// FINAL COMMANDS

// Rename all to lowercase + del
gulp.task('lower', gulp.series(['lowercase', 'delete_images_to_lowercase_dir_content']));

// Produce all the different sizes images + del
gulp.task('sizes', gulp.series(['size_images', 'delete_images_to_size_dir_content']));

// Rename images with dir name and progressive index + del
gulp.task('rename', gulp.series(['rename_images', 'delete_images_to_rename_dir_content']));

// Rename images adding dir name and progressive index + del
gulp.task('curate', gulp.series(['curatename', 'delete_images_to_rename_dir_content']));
