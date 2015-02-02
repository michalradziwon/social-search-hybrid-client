var React = require('react');
var Router = require('react-router');
var App = require('./components/App.jsx');
var Login = require('./components/LoginPage.jsx');
var Home = require('./components/HomePage.jsx');

var {
  Route,
  NotFoundRoute
  } = Router;


// Route definition
var routes = (  <Route handler={App}>
  <Route path ="/" name="login" handler={Login} />
  <Route path="/home" name="home" handler={Home} />
  <NotFoundRoute handler={Login}/>
</Route>
);

module.exports = routes;
