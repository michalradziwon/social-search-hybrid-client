var Reflux = require('reflux');

var BeerActions = Reflux.createActions([
  'pairingTypeChanged',
  'notifyAll',
  'flavourTypeToggled',
  'mainIngredientToggled',
  'additionalIngredientToggled',
  'beerSelected'
]);


BeerActions.pairingTypeChanged.preEmit = function (pairingType) {
  console.log("pairingTypeChanged " + pairingType);
};

module.exports = BeerActions;

