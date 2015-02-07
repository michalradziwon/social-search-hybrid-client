var Reflux = require('reflux');
var FinalChoiceActions = require('./FinalChoiceActions');
var BeerStore = require('./BeerStore');


var FinalChoiceStore = Reflux.createStore({
  listenables: [FinalChoiceActions],
  init: function () {
    this.listenTo(BeerStore, this.onBeerStoreChanged);
  },
  state: {
    availableDishes: [],
    availableBeers: []
  },
  onBeerStoreChanged: function (beerStoreState) {
    if (beerStoreState && beerStoreState.flavourTypes && beerStoreState.flavourTypes.size > 0 && beerStoreState.mainIngredients && beerStoreState.mainIngredients.size > 0 && beerStoreState.additionalIngredients && beerStoreState.additionalIngredients.size > 0) {
      console.log("FETCH MEALS AND BEERS TODO!!!!!!!!!!!!!!!!"); // TODO add call on webservice here
    }
  }

});

module.exports = FinalChoiceStore;
