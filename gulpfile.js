var path = require('path'),
    gulp = require('gulp'),
    handlebars = require('handlebars'),
    Metalsmith = require('metalsmith'),
    browserSync = require('browser-sync').create(),
    //headings = require('metalsmith-headings'),
    site = require('./site');

// Metalsmith
function setupMetalsmith(callback) {
  var ms = new Metalsmith(process.cwd());
  var msconfig = site.metalsmith || {};
  var msplugins = msconfig.plugins || {};
  ms.source(msconfig.config.contentRoot);
  ms.destination(msconfig.config.destRoot);
  ms.metadata(msconfig.metadata);

  Object.keys(msplugins).forEach(function(key) {
    var plugin = require(key);
    var options = msplugins[key];

      ms.use(plugin(options));
  });
  ms.build(function(err) {
    if (err) {
      console.log(err);
      return callback(err);
    }
    callback();
    browserSync.reload();
  });
}

gulp.task('browserSync', ['metalsmith'], function() {
  browserSync.init({
    server: {
      baseDir: './build',
      online: true,
    }
  })
})

gulp.task('metalsmith', function(callback) {
  setupMetalsmith(callback);
});

//--------------------------------------------------------------------------------------------------------------------------//
// WATCH
//--------------------------------------------------------------------------------------------------------------------------//

// set gulp to run the 'watch' task by default
gulp.task('default', ['metalsmith', 'browserSync', 'watch']);


// Watched folders and their assigned tasks
gulp.task('watch', ['browserSync'], function () {
    gulp.watch([
        site.metalsmith.config.contentRoot+'/**/*',
        site.metalsmith.config.layoutRoot+'/**/*'
    ], { interval: 1000 }, ['metalsmith']);
      // gulp.watch('./Content/sass/**/*.scss', { interval: 1000 }, ['process-css'])
      // gulp.watch('../Scripts/**/*.js', { interval: 1000 }, ['copy-js'])
      // gulp.watch('../Views/**/*.cshtml', { interval: 1000 }, ['copy-views'])
      // gulp.watch('./**/*.aspx', { interval: 1000 }, ['copy-pattern-library-files'])
});
