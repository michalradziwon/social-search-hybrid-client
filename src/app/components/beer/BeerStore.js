var Reflux = require('reflux');
var BeerActions = require('./BeerActions');

var Immutable = require('immutable');
var Set = Immutable.Set;

var BeerStore = Reflux.createStore({
  listenables: BeerActions,
  state: {
    flavourTypes: new Set([1, 2])
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
    this.state.flavourTypes = (this.state.flavourTypes.has(flavourType)) ? this.state.flavourTypes.remove(flavourType) : this.state.flavourTypes.add(flavourType);
    this.notifyListeners();
  },
  notifyListeners: function () {
    this.trigger(this.state);
  }
});

module.exports = BeerStore;
