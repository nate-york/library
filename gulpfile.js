var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var changed = require('gulp-changed');
var handlebars = require('handlebars');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build',
      online: true,
    },
    files: [
      "./build/**/*.html"
    ]
  })
})

//--------------------------------------------------------------------------------------------------------------------------//
// WATCH
//--------------------------------------------------------------------------------------------------------------------------//

// set gulp to run the 'watch' task by default
gulp.task('default', ['browserSync', 'watch']);


// Watched folders and their assigned tasks
gulp.task('watch', ['browserSync'], function () {

      // gulp.watch('./Content/sass/**/*.scss', { interval: 1000 }, ['process-css'])
      // gulp.watch('../Scripts/**/*.js', { interval: 1000 }, ['copy-js'])
      // gulp.watch('../Views/**/*.cshtml', { interval: 1000 }, ['copy-views'])
      // gulp.watch('./**/*.aspx', { interval: 1000 }, ['copy-pattern-library-files'])
});
