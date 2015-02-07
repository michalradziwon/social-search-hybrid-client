var Reflux = require('reflux');
var BeerServiceClient = require('../../remote/BeerServiceClient.js');

var FinalChoiceActions = Reflux.createActions([
  'fetchBeersByFlavourProfile',
  'fetchBeersByFlavourProfileFinished',
  'notifyAll'
]);


FinalChoiceActions.fetchBeersByFlavourProfile.preEmit = function (flavourProfileList) {
  BeerServiceClient.fetchBeersByFlavourProfile(flavourProfileList).then(function(beerList){
    FinalChoiceActions.fetchBeersByFlavourProfileFinished(beerList);
  });
};

module.exports = FinalChoiceActions;

