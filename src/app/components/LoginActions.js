var Reflux = require('reflux');
var BackendClient = require('../remote/BackendClient');
var Router = require('../Router.jsx');
var Q = require('q');

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

LoginActions.loginSuccessfully.preEmit = function () {
  Q.delay(600).then(function(){
    Router.transitionTo("/home"); // TODO - maybe lets introduce a RouterAction (???)
  });

  /*
  TODO - fix that later.
  I need to delay transition here, otherwise I got some internal error (without app crash) caused by some button-animatino related logic:
   Uncaught Error: Invariant Violation: replaceState(...): Can only update a mounted or mounting component.
   Probably it is caused by the animation-related logic in RaisedButton._animateButtonClick (450ms delay)
   */

};


module.exports = LoginActions;