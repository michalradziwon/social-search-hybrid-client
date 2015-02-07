var React = require('react');
var mui = require('material-ui');

var Router = require('../../Router.jsx');


var {
  IconButton
  } = mui;

var MainPage = React.createClass({
  render: function () {
    return (
      <div>
        <IconButton icon="image-navigate-next" onTouchTap={this.onTouch}/>
        </div>

    );
  },
  onTouch:function(){
    Router.transitionTo("/second"); // TODO later - move to action layer...
  }
});

module.exports = MainPage;
