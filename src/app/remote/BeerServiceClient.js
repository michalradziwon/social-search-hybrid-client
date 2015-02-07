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
      console.log("resp:",res);
      if (res.ok) {
        defer.resolve(res.body.beers);
      } else {
        defer.reject(res.body);
      }
    });
  return defer.promise;
};

