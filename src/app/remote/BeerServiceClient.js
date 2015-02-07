var Q = require('q');

module.exports.fetchBeersByFlavourProfile = function (flavourProfileList) {
  console.log("fetching beers for flavours " + flavourProfileList);

  // TODO STUB impl.
  var Q = require('q');
  return Q.delay(1000).then(function () {
    return [{
      name: "Tyskie_" + flavourProfileList[0],
      imageUrl: "http://todo/tyskie.jpg",
      flavourProfile: "spicy"
    },
      {
        name: "Lech",
        imageUrl: "http://todo/lech.jpg",
        flavourProfile: "sour"
      }
      ,
      {
        name: "Okocim",
        imageUrl: "http://todo/lech.jpg",
        flavourProfile: "sour"
      }];
  });
};

