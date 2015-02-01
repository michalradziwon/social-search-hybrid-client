var Reflux = require('reflux');
var BackendClient = require('../remote/BackendClient');


var LoginActions = Reflux.createActions([
  'login',
  'logout',
  'loginFailed',
  'loginSuccessfully'
]);


LoginActions.login.preEmit = function (username, password) {
  BackendClient.authenticate(username, password).then(function (ok, err) {
    if (ok) {
      LoginActions.loginSuccessfully();
    } else {
      LoginActions.loginFailed(err);
    }
  }).catch(function (e) {
    LoginActions.loginFailed(e);
  });
};


module.exports = LoginActions;