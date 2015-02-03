var build = require("./build");
var gulp = require('gulp');
var runSequence = require('run-sequence');

//gulp.task('build-cordova', ['build']);

var baseDir = ".";
var cordovaDir = baseDir + "/cordova";

var exec = require('child_process').exec;

gulp.task('deploy-cordova', function (done) {
  runSequence(
    'build-cordova', 'cordova-run',
    done);
});


gulp.task('build-cordova', function (done) {
  runSequence(
    'rm-cordova', 'cordova-create-project', 'cordova-add-android', 'build', 'populate-cordova-www',
    done);
});


gulp.task('rm-cordova', function (done) {
  // TODO use platform-independent logic here
  exec('rm -rf cordova/**', {cwd: baseDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


gulp.task('cordova-create-project', function (done) {
  exec('cordova create cordova com.dendryt.socialsearch SocialSearch', {cwd: baseDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


gulp.task('cordova-add-android', function (done) {
  exec('cordova platform add android', {cwd: cordovaDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


gulp.task('populate-cordova-www', function (done) {
  // TODO use platform-independent logic here
  exec('cp -r build/** cordova/www/', {cwd: baseDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('cordova-run', function (done) {
  exec('cordova run', {cwd: cordovaDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


