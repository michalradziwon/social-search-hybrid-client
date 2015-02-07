var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');

var Router = require('../../Router.jsx');
var BeerStore = require('./BeerStore');
var BeerActions = require('./BeerActions');

var {
  IconButton
  } = mui;

var SecondPage = React.createClass({
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
        Second... {this.state.pairingType}
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
        <IconButton icon="image-navigate-next" onTouchTap={this.goToNext}/>
      </div>
    );
  },
  goToPrevious:function(){
    Router.transitionTo("/"); // TODO later - move to action layer...
  },
  goToNext:function(){
    Router.transitionTo("/final"); // TODO later - move to action layer...
  },
  onBeerStoreChanged(newState){
    this.setState(newState);
  }
});

module.exports = SecondPage;
