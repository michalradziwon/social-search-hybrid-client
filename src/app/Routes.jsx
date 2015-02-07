var React = require('react');
var Router = require('react-router');
var App = require('./components/App.jsx');
var Login = require('./components/LoginPage.jsx');

var MainPage = require("./components/beer/MainPage.jsx");
var SecondPage = require("./components/beer/SecondPage.jsx");
var FinalPage = require("./components/beer/FinalPage.jsx");
var {
  Route,
  NotFoundRoute
  } = Router;


// Route definition
var routes = (  <Route handler={App}>
  <Route path ="/" name="login" handler={MainPage} />
  <Route path="/main" name="main" handler={MainPage} />
  <Route path="/second" name="second" handler={SecondPage} />
  <Route path="/final" name="final" handler={FinalPage} />
  <NotFoundRoute handler={Login}/>
</Route>
);

module.exports = routes;
