var React = require("react");
var Swipe = require("react-swipper");


var Swipper = React.createClass({
    render: function () {
      return (<Swipe className="swipper">
        <div><b>Raz</b></div>
        <div><b>Dwa</b></div>
        <div><b>Trzy</b></div>
      </Swipe>);
    }

  }
);

module.exports = Swipper;