var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var BeerStore = require('./BeerStore');
var BeerActions = require('./BeerActions');
var {
  IconButton
  } = mui;
var Router = require('../../Router.jsx');

var FinalPage = React.createClass({
  mixins: [
    Reflux.ListenerMixin
  ],
  getInitialState:function(){
    return {};
  },
  componentDidMount:function(){
    this.listenTo(BeerStore, this.onBeerStoreChanged);
    BeerActions.notifyAll();
  },
  render: function () {
    return (
      <div>
      Final Page ... TODO
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
      </div>
    );
  },
  goToPrevious:function(){
    Router.transitionTo("/second"); // TODO later - move to action layer...
  },
  onBeerStoreChanged(newState){
    this.setState(newState);
  }
});

module.exports = FinalPage;
