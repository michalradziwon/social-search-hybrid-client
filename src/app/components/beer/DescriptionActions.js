var Reflux = require('reflux');
var BeerServiceClient = require('../../remote/BeerServiceClient');

var DescriptionActions = Reflux.createActions([
  'openBeerDescription',
  'openDishDescription',
  'notifyAll',
  'populateDescription'
]);

DescriptionActions.openBeerDescription.preEmit = function (beerId) {
  BeerServiceClient.fetchBeerDescription(beerId).then(function(beerDesc){
    beerDesc.descriptionType="beer"; // FIXME hack before the end of the hackhaton... ;)
    DescriptionActions.populateDescription(beerDesc);
  });
};


module.exports = DescriptionActions;

