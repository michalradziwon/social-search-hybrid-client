var Reflux = require('reflux');

var BeerActions = Reflux.createActions([
  'pairingTypeChanged',
  'notifyAll'
]);


BeerActions.pairingTypeChanged.preEmit = function (pairingType) {
  console.log("pairingTypeChanged " + pairingType);
};

BeerActions.notifyAll.preEmit = function (pairingType) {
};


module.exports = BeerActions;
