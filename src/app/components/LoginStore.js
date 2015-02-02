var Reflux = require('reflux');
var LoginActions = require('./LoginActions');

var LoginStore = Reflux.createStore({
  listenables: LoginActions,
  authenticated: false,
  lastError: null,

  onLoginFailed: function (_error) {
    this.authenticated = false;
    this.lastError = _error;
    this.notifyListeners();
  },
  onLoginSuccessfully: function () {
    this.authenticated = true;
    this.lastError = null;
    this.notifyListeners();
  },

  notifyListeners: function () {
    this.trigger({"authenticated": this.authenticated, "error": this.lastError});
  }
});

module.exports = LoginStore;