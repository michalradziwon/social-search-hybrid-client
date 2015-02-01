var React = require('react');
var Router = require('react-router');

var {
  RouteHandler
  } = Router;


var App = React.createClass({
  render: function () {
    return (
      <div className="App">
        <div className="Content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});
module.exports = App;
