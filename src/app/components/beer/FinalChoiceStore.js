var Reflux = require('reflux');
var FinalChoiceActions = require('./FinalChoiceActions');
var BeerStore = require('./BeerStore');


var FinalChoiceStore = Reflux.createStore({
  listenables: [FinalChoiceActions],
  init: function () {
    this.listenTo(BeerStore, this.onBeerStoreChanged);
  },
  state: {
    availableDishes: [{name: "Dish one."}, {name: "Dish two"}, {name: "Dish three"}],
    availableBeers: []
  },
  onBeerStoreChanged: function (beerStoreState) {
    if (beerStoreState && beerStoreState.pairingType && beerStoreState.flavourTypes && beerStoreState.flavourTypes.size > 0 && beerStoreState.mainIngredients && beerStoreState.mainIngredients.size > 0 && beerStoreState.additionalIngredients && beerStoreState.additionalIngredients.size > 0) {
      FinalChoiceActions.fetchPairings({
          'pairingType': beerStoreState.pairingType,
          'mains': beerStoreState.mainIngredients.toArray(),
          'additionals': beerStoreState.additionalIngredients.toArray(),
          'flavorProfiles': beerStoreState.flavourTypes.toArray()
        }
      );

    }
    if (beerStoreState.flavourTypes && beerStoreState.flavourTypes.size > 0) {
      FinalChoiceActions.fetchBeersByFlavourProfile(beerStoreState.flavourTypes.toArray());
    }
  },
  onFetchBeersByFlavourProfileFinished: function (beerList) {
    this.state.availableBeers = beerList;
    this.notifyListeners();
  },
  onFetchPairingsFinished: function (dishList) {
    this.state.availableDishes = dishList;
    this.notifyListeners();
  },
  notifyListeners: function () {
    this.trigger(this.state);
  },
  onNotifyAll: function () {
    console.log("onNotifyAll");
    this.notifyListeners();
  }

});

module.exports = FinalChoiceStore;
