var Router = require('./Router.jsx');
var LoginStore = require('./components/LoginStore.js');

module.exports.securityCheck = function (pathname) {
  console.log("securityCheck", pathname, "auth=" + LoginStore.authenticated);
  if ("/" != pathname && !LoginStore.authenticated) {
    console.log("illegal path for unauthorised user - redirecting to /");
    Router.transitionTo("/");
  }
};