(function () {
  var React = require('react');
  var Router = require('react-router');
  var {
    Route,
    NotFoundRoute
    } = Router;

  // Components
  //
  var App = require('./components/App.jsx');
  var Login = require('./components/LoginPage.jsx');
  var Home = require('./components/HomePage.jsx');


  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();




  // Route definition
  var routes = (  <Route handler={App}>
    <Route path ="/" name="login" handler={Login} />
    <Route path="/home" name="home" handler={Home} />
    <NotFoundRoute handler={Login}/>
  </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
  });

  //Needed for React Developer Tools
  window.React = React;
})();