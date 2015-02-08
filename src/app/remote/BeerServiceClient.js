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
 * 'pairingType': 'all',
 * 'mains': ['beef'],
 * 'additionals': ['rice'],
 * 'flavorProfiles': ['spicy']
 * }
 *
 * Response payload example: // TODO
 * {
 *          'id': recipePairing.recipe.id,
 *          'name': recipePairing.recipe.name,
 *          'imageUrl': recipePairing.recipe.images.list[0].smallUrl,
 *          'flavorProfile': el.flavorProfiles.length > 0 ? el.flavorProfiles[0].name : ''
 *        }
 *
 * @param flavourProfileList
 * @returns {*}
 */
module.exports.fetchPairings = function (input) {

  // FIXME at the moment it is a stub
  return Q.delay(2000).then(function(){
    return [{
      id : 1,
      name : "Schabowy_" + JSON.stringify(input),
      imageUrl : "http://www.todo.pl/image.jpg",
      flavorProfile: "spicy"
    },{
      id : 2,
      name : "Flaczki" + JSON.stringify(input),
      imageUrl : "http://www.todo.pl/image2.jpg",
      flavorProfile: "spicy"
    }
    ];

  });



  // TODO bind to real backend API later
  //var defer = Q.defer();
  //agent
  //  .post("https://safe-depths-9845.herokuapp.com/api/v1/ZZZZZZZZZZZZZZZZZZZZZZTODO")
  //  .set("Accept", "application/json")
  //  .send(input)
  //  .end(function (res) {
  //    console.log("resp:", res);
  //    if (res.ok) {
  //      defer.resolve(res.body.beers); // TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //    } else {
  //      defer.reject(res.body);
  //    }
  //  });
  //return defer.promise;
};

