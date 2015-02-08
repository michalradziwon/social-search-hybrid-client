var agent = require('superagent');
var Q = require('q');

module.exports.fetchBeersByFlavourProfile = function (flavourProfileList) {

  var defer = Q.defer();
  agent
    .post("https://safe-depths-9845.herokuapp.com/api/v1/beersFlavorProfiles")
    .set("Accept", "application/json")
    .send({
      flavorProfiles: flavourProfileList
    })
    .end(function (res) {
      console.log("resp:", res);
      if (res.ok) {
        defer.resolve(res.body.beers);
      } else {
        defer.reject(res.body);
      }
    });
  return defer.promise;
};

/**
 *
 * Request payload example:
 * {
 * pairings:{
 * 'pairingType': 'all',
 * 'mains': ['beef'],
 * 'additionals': ['rice'],
 * 'flavorProfiles': ['spicy']
 * }
 * }
 *
 * Response payload example: // TODO
 * [{
 *          'id': recipePairing.recipe.id,
 *          'name': recipePairing.recipe.name,
 *          'imageUrl': recipePairing.recipe.images.list[0].smallUrl,
 *          'flavorProfile': el.flavorProfiles.length > 0 ? el.flavorProfiles[0].name : ''
 *        }]
 *
 * @param flavourProfileList
 * @returns {*}
 */
module.exports.fetchPairings = function (input) {
  var defer = Q.defer();
  agent
    .post("https://safe-depths-9845.herokuapp.com/api/v1/pairingsFlavorProfiles")
    .set("Accept", "application/json")
    .send({pairings:input})
    .end(function (res) {
      console.log("resp:", res);
      if (res.ok) {
        defer.resolve(res.body);
      } else {
        defer.reject(res.body);
      }
    });
  return defer.promise;
};






/**
 500
 https://api.foodily.com/v1/beerPairings?pairingType=BEER_ROULETTE_WINNERS&limit=50&fields=*(*)%2CrecipePairings(recipe(name%2Cid%2Chref)%2Cpairings(*))&expand=%20
 */
