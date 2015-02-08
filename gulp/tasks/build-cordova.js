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
    'rm-cordova', 'cordova-create-project', 'cordova-add-android', 'build', 'populate-cordova-www', 'cordova-plugins-install', 'cordova-build'
    ,done);
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


// a little confusing... TODO rename it later
gulp.task('cordova-build', function (done) {
  exec('cordova build', {cwd: cordovaDir}, function (err, stdout, stderr) {
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



// Cordova Plugins
//
gulp.task('cordova-plugins-install', function (done) {
  runSequence(
    'cordova-plugins-iflyspeech',
    //'cordova-plugins-vibration',
    //'cordova-plugins-device-motion',
    'cordova-plugins-camera'
    ,done);
});



gulp.task('cordova-plugins-iflyspeech', function (done) {
  exec('cordova plugin add https://github.com/floatinghotpot/cordova-plugin-iflyspeech.git', {cwd: cordovaDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('cordova-plugins-vibration', function (done) {
  exec('cordova plugin add org.apache.cordova.vibration', {cwd: cordovaDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});


gulp.task('cordova-plugins-device-motion', function (done) {
  exec('cordova plugin add org.apache.cordova.device-motion', {cwd: cordovaDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});



gulp.task('cordova-plugins-camera', function (done) {
  exec('cordova plugin add org.apache.cordova.camera', {cwd: cordovaDir}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});



