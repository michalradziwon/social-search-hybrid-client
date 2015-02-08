var Reflux = require('reflux');
var BeerServiceClient = require('../../remote/BeerServiceClient.js');

var FinalChoiceActions = Reflux.createActions([
  'fetchBeersByFlavourProfile',
  'fetchBeersByFlavourProfileFinished',
  'fetchPairings',
  'fetchPairingsFinished',
  'notifyAll'
]);


FinalChoiceActions.fetchBeersByFlavourProfile.preEmit = function (flavourProfileList) {
  BeerServiceClient.fetchBeersByFlavourProfile(flavourProfileList).then(function(beerList){
    FinalChoiceActions.fetchBeersByFlavourProfileFinished(beerList);
  });
};

FinalChoiceActions.fetchPairings.preEmit = function (input) {
  BeerServiceClient.fetchPairings(input).then(function(dishList){
    FinalChoiceActions.fetchPairingsFinished(dishList);
  });
};

module.exports = FinalChoiceActions;

