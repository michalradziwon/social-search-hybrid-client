var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var BeerStore = require('./BeerStore');
var BeerActions = require('./BeerActions');
var {
  IconButton
  } = mui;
var Router = require('../../Router.jsx');

var Swipe = require("react-swipper");



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
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
        <Swipe className="swipper">
          <div>
            <b>Dish 1</b>
          </div>
          <div>
            <b>Dish 2</b>
          </div>
          <div>
            <b>Dish 3</b>
          </div>
        </Swipe>
        <Swipe className="swipper">
          <div>
            <b>Tyskie</b>
          </div>
          <div>
            <b>Stella</b>
          </div>
          <div>
            <b>Lech</b>
          </div>
        </Swipe>
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
