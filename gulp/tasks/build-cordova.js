var build = require("./build");
var gulp = require('gulp');

//gulp.task('build-cordova', ['build']);

var baseDir = ".";
var cordovaDir= baseDir + "/cordova";

var exec = require('child_process').exec;

//gulp.task('start-cordova', ['build-cordova', 'cordova-run']);
gulp.task('build-cordova', ['cordova-create-project', 'cordova-add-android', 'build', 'populate-cordova-www']);




gulp.task('cordova-create-project', function(done) {
  exec('cordova create cordova com.dendryt.socialsearch SocialSearch', { cwd: baseDir }, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


gulp.task('cordova-add-android', function(done) {
  exec('cordova platform add android', { cwd: cordovaDir }, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


gulp.task('populate-cordova-www', function(done) {
  console.log(1);
  /*
   cd ..
   gulp build
   cp -r build/** cordova/www/
   */
  //exec('cordova platform add android', { cwd: baseDir }, function(err, stdout, stderr) {
  //  console.log(stdout);
  //  console.log(stderr);
  //  done(err);
  //});
});

gulp.task('cordova-run', function(done) {
  exec('cordova run', { cwd: cordovaDir }, function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


