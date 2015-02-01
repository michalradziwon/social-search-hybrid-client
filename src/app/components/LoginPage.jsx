var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var Input = mui.Input;

var LoginActions = require('./LoginActions');
var LoginStore = require('./LoginStore');

var {
  Link
  } = require('react-router');


var Login = React.createClass({
  mixins: [
    Router.Navigation,
    Reflux.listenTo(LoginStore, "onLoginStoreChanged")
  ],
  componentWillMount : function(){
    console.log("componentWillMount", arguments);
  },

  getInitialState: function () {
    return {};
  },
  render: function () {

    return (
      <div className="centralized">
        <h3>Welcome to Social Search</h3>
        <Input ref="login" type="text" name="login" placeholder="Login" />
        <Input ref="password" type="password" name="password" placeholder="Password" />
        <RaisedButton label="Login" primary={true} onTouchTap={this.login} />
  {this.state /*FIXME why this.state is undefined during the 1st render*/ && this.state.authFailed ? <p className="warning">Authentication failed.</p> : null}

        <Link to ="/home"> HOME TMP FIXME </Link>
      </div>
    );
  },

  login: function () {
    var login = this.refs.login.getValue() || "";
    var pass = this.refs.password.getValue() || "";
    LoginActions.login(login, pass);
  },
  onLoginStoreChanged: function (event) {
    if (event.authenticated) {
      console.log("SUCC");
      this.setState({"authFailed": false});
      this.transitionTo('/home');
    } else {
      this.setState({"authFailed": true});
      console.log("ERROR");
    }
  },
  onLoginSuccessfully: function () {
  }

});

module.exports = Login;
