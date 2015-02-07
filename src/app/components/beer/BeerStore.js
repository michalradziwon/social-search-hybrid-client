var Reflux = require('reflux');
var BeerActions = require('./BeerActions');

var BeerStore = Reflux.createStore({
  listenables: BeerActions,
  state: {
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

  notifyListeners: function () {
    this.trigger(this.state);
  }
});

module.exports = BeerStore;
