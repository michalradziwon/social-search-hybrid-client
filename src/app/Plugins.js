var Q = require('q');

module.exports.vibrate = {
  // org.apache.cordova.vibration
  vibrate: function (timeOrPattern) {
    navigator.vibrate(timeOrPattern);
  }
};

module.exports.accelerometer = {
  getCurrentAcceleration: function () {
    var defer = Q.defer();
    navigator.accelerometer.getCurrentAcceleration(function (acceleration) {
        defer.resolve(acceleration);
      }, function (error) {
        defer.reject(error);
      }
    );
    return defer.promise;
  }

};