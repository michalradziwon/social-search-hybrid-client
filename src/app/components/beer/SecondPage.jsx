var React = require('react');
var mui = require('material-ui');

var Router = require('../../Router.jsx');


var {
  IconButton
  } = mui;

var SecondPage = React.createClass({
  render: function () {
    return (
      <div>
        Second... TODO
        <IconButton icon="image-navigate-next" onTouchTap={this.onTouch}/>
      </div>
    );
  },
  onTouch:function(){
    Router.transitionTo("/final"); // TODO later - move to action layer...
  }
});

module.exports = SecondPage;
