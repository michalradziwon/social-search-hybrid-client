var Reflux = require('reflux');
var BeerActions = require('./BeerActions');

var Immutable = require('immutable');
var Set = Immutable.Set;

var BeerStore = Reflux.createStore({
  listenables: BeerActions,
  state: {
    oneBeerSelectedOnly : null, // when user takes a photo in order to choose a beer, and the beer is recognized, this variable is not null
    flavourTypes: new Set(),
    mainIngredients: new Set(),
    additionalIngredients: new Set()
  },
  onPairingTypeChanged: function (newPairingType) {
    this.state.pairingType = newPairingType;
    console.log("onPairingTypeChanged " + this.state.pairingType + "->" + newPairingType);
    this.notifyListeners();
  },
  onNotifyAll: function () {
    console.log("onNotifyAll");
    this.notifyListeners();
  },
  onFlavourTypeToggled: function (flavourType) {
    this.state.oneBeerSelectedOnly = null; // after user toggle any of the flavor buttons, the seleccted beer is no longer selected ...
    this.state.flavourTypes = (this.state.flavourTypes.has(flavourType)) ? this.state.flavourTypes.remove(flavourType) : this.state.flavourTypes.add(flavourType);
    this.notifyListeners();
  },
  onMainIngredientToggled: function (mainIngredient) {
    this.state.mainIngredients = (this.state.mainIngredients.has(mainIngredient)) ? this.state.mainIngredients.remove(mainIngredient) : this.state.mainIngredients.add(mainIngredient);
    this.notifyListeners();
  },
  onAdditionalIngredientToggled: function (additionalIngredient) {
    this.state.additionalIngredients = (this.state.additionalIngredients.has(additionalIngredient)) ? this.state.additionalIngredients.remove(additionalIngredient) : this.state.additionalIngredients.add(additionalIngredient);
    this.notifyListeners();
  },
  notifyListeners: function () {
    this.trigger(this.state);
  },
  onBeerSelected:function(beer){
    this.state.flavourTypes=new Set([beer.flavorProfile]);
    this.state.oneBeerSelectedOnly = beer;
    this.notifyListeners();
  }
});

module.exports = BeerStore;
