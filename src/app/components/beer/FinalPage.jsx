var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var BeerStore = require('./BeerStore');
var FinalChoiceStore = require('./FinalChoiceStore');
var FinalChoiceActions = require('./FinalChoiceActions');
var BeerActions = require('./BeerActions');
var {
  IconButton
  } = mui;
var Router = require('../../Router.jsx');

var Swipe = require("react-swipper");

var DescriptionActions = require('./DescriptionActions');

var BeerImageUtil = require('./BeerImageUtil');

var FinalPage = React.createClass({
  seq : 0,
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
    FinalChoiceActions.notifyAll();
  },
  render: function () {
    var self = this;


    // FIXME FIXME FIXME FIXME
    // extremely ugly hack.
    // this is a workaround for a scenario when the availableBeers/Dishes are updated and during the render() call, the Swiper was not updating itself.....
    var seq1 = this.seq++;
    var seq2 = this.seq++;


    var availableBeers = this.state.availableBeers ?         (<Swipe key={seq1} className="swipper">
        {this.state.availableBeers.map(function (beer) {
          return <div key={beer.id}>
            <b><div onTouchTap={self.onBeerClicked(beer)} className="beerName"><img src={BeerImageUtil.getBeerImage(beer)}/>{beer.name}</div></b>
          </div>;
        })}
        </Swipe>) : null;

    var availableDishes = this.state.availableDishes ? (<Swipe key={seq2} className="swipper">
    {this.state.availableDishes.map(function (dish) {
        return <div key={dish.name}>
          <b><div onTouchTap={self.onDishClicked(dish)} className="beerName"><img src={dish.imageUrl}/>{dish.name}</div></b>
        </div>;
      }
    )}</Swipe>) : null;
    var s = {position:"absolute"};
    return (<div>
      <div className="my-btn-left" style={s}>
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
      </div>
      <div>
        {availableBeers}
        {availableDishes}
      </div>
    </div>
    );
  },
goToPrevious: function (abc) {
  Router.transitionTo("/second"); // TODO later - move to action layer...
},
  onBeerStoreChanged(newState) {
    //this.setState(newState);
  },
  onFinalChoiceStoreChanged: function (newState) {
    this.setState(newState);
  },
  onBeerClicked(beer){
    return function () {
      DescriptionActions.openBeerDescription(beer.id);
    }.bind(this);
  },
  onDishClicked(dish){
    return function () {
      DescriptionActions.openDishDescription(dish.id);
    }.bind(this);
  }

});

module.exports = FinalPage;
