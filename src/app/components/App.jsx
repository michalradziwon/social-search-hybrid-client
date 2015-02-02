var React = require('react');
var ReactRouter = require('react-router');
var Security = require('../Security.js');
var {
  RouteHandler
  } = ReactRouter;


var App = React.createClass({
  mixins: [ReactRouter.State],
  componentWillUpdate: function () {
    console.log("will update");
    Security.securityCheck(this.getPathname());
  },
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
