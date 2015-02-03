var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./Routes.jsx');


console.log("Routes", routes);

// workaround for circular dependency issue...
// for details see gaearon's reponse at https://github.com/rackt/react-router/issues/380
var router;


module.exports.run = function (target) {
  var getRootUrl = function (url) {
    var matches = url.match(/^(https?\:\/\/[^\/?#]+)(?:[\/?#]|$)/i);
    return matches && (matches[1] + "/");
  };
  console.log("Current location is " + document.location.href);
  if (document.location.href != getRootUrl(document.location.href) && document.location.href.indexOf("file://") != 0) {
    var newLocation = getRootUrl(document.location.href);
    console.log("changing location from " + document.location.href + " to " + newLocation);
    document.location.href = newLocation;
  }else{
    router = ReactRouter.run(routes, function (Handler) {
      React.render(<Handler/>, target);
    });
  }
};

module.exports.transitionTo = function (to, params, query) {
  console.log("transition to " + to);
  router.transitionTo(to, params, query);
};



