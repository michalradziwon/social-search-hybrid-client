var configuration = require('../configuration').backendClient();
var agent = require('superagent');
var Q = require('q');


/**
 * Just some basic HTTP GET request as a PoC of integration with superagent.
 * TODO add promise-based API here later
 */
module.exports.test = function (ok) {
  return agent.get(configuration.host + "/api/v1/test").end(function (res) {
    if (res.ok) {
      ok(res.body);
    } else {
      // ... TODO
    }
  });
};

module.exports.authenticate = function (_login, _password) {
  var defer = Q.defer();
  agent
    .post(configuration.host + "/api/v1/authenticate")
    .set("Accept", "application/json")
    .send({username: _login, password: _password})
    .end(function (res) {
      console.log("resp:"+JSON.stringify(res));
      if (res.ok) {
        defer.resolve(res.body);
      } else {
        defer.reject(res.body);
      }
    });
  return defer.promise;
};
