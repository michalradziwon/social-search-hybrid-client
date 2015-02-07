var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');

var Router = require('../../Router.jsx');
var BeerStore = require('./BeerStore');
var BeerActions = require('./BeerActions');


var Immutable = require('immutable');
var Set = Immutable.Set;


var {
  IconButton,
  RaisedButton,
  FlatButton
  } = mui;

var SecondPage = React.createClass({
  mixins: [
    Reflux.ListenerMixin
  ],
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {
    this.listenTo(BeerStore, this.onBeerStoreChanged);
    BeerActions.notifyAll();
  },
  render: function () {
    var self = this;
    var flavourTypeButtons = new Set(["green_hoppy", "roasted_toasted", "citrus_zesty", "sour", "spicy", "fruity", "toffee_caramel"]).map(function (flavour) {
      return (self.state.flavourTypes && self.state.flavourTypes.has(flavour))
        ? <RaisedButton label={flavour} primary={true}  onTouchTap={self.onTouch(flavour)}/>
        : <FlatButton label={flavour} primary={true} onTouchTap={self.onTouch(flavour)}/>;
    }).toArray();
    return (
      <div>
        <div>
          {flavourTypeButtons}
        </div>
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
        <IconButton icon="image-navigate-next" onTouchTap={this.goToNext}/>
      </div>
    );
  },
  goToPrevious: function () {
    Router.transitionTo("/"); // TODO later - move to action layer...
  },
  goToNext: function () {
    Router.transitionTo("/final"); // TODO later - move to action layer...
  },
  onBeerStoreChanged(newState) {
    this.setState(newState);
  },
  onTouch: function (_selected) {
    return function () {
      BeerActions.flavourTypeToggled(_selected);
    }.bind(this);
  }
});

module.exports = SecondPage;
