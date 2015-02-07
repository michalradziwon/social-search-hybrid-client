var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');

var Router = require('../../Router.jsx');
var BeerStore = require('./BeerStore');
var FinalChoiceStore = require('./FinalChoiceStore');
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
    this.listenTo(FinalChoiceStore, this.onFinalChoiceStoreChanged);
    BeerActions.notifyAll();
  },
  render: function () {
    var self = this;
    var flavourTypeButtons = new Set(["green_hoppy", "roasted_toasted", "citrus_zesty", "sour", "spicy", "fruity", "toffee_caramel"]).map(function (flavour) {
      return (self.state.flavourTypes && self.state.flavourTypes.has(flavour))
        ? <RaisedButton label={flavour} primary={true}  onTouchTap={self.onFlavourTypeToggle(flavour)}/>
        : <FlatButton label={flavour} primary={true} onTouchTap={self.onFlavourTypeToggle(flavour)}/>;
    }).toArray();
    var mainIngredientButtons = new Set(["fish", "chicken", "pork", "beef"]).map(function (flavour) {
      return (self.state.mainIngredients && self.state.mainIngredients.has(flavour))
        ? <RaisedButton label={flavour} primary={true}  onTouchTap={self.onMainIngredientToggled(flavour)}/>
        : <FlatButton label={flavour} primary={true} onTouchTap={self.onMainIngredientToggled(flavour)}/>;
    }).toArray();
    var additionalIngredientButtons = new Set(["rice", "potato", "pasta", "chips", "vegetables"]).map(function (flavour) {
      return (self.state.additionalIngredients && self.state.additionalIngredients.has(flavour))
        ? <RaisedButton label={flavour} primary={true}  onTouchTap={self.onAdditionalIngredientToggled(flavour)}/>
        : <FlatButton label={flavour} primary={true} onTouchTap={self.onAdditionalIngredientToggled(flavour)}/>;
    }).toArray();


    return (
      <div>
        <div>
          {flavourTypeButtons}

          <div>Main ingredient {mainIngredientButtons}</div>
          <div>Additional ingredient {additionalIngredientButtons}</div>
        </div>
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
        <IconButton icon="image-navigate-next" onTouchTap={this.goToNext} disabled={!this.isNextPageAllowed()}/>
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
  onFinalChoiceStoreChanged(newState) {
    console.log("SP.onFinalChoiceStoreChanged", newState);
  },
  onFlavourTypeToggle: function (_selected) {
    return function () {
      BeerActions.flavourTypeToggled(_selected);
    }.bind(this);
  },
  onMainIngredientToggled: function (_selected) {
    return function () {
      BeerActions.mainIngredientToggled(_selected);
    }.bind(this);
  },
  onAdditionalIngredientToggled: function (_selected) {
    return function () {
      BeerActions.additionalIngredientToggled(_selected);
    }.bind(this);
  },
  isNextPageAllowed: function () {
    return this.state.flavourTypes && this.state.flavourTypes.size > 0 && this.state.mainIngredients && this.state.mainIngredients.size > 0 && this.state.additionalIngredients && this.state.additionalIngredients.size > 0;
  }

});

module.exports = SecondPage;
