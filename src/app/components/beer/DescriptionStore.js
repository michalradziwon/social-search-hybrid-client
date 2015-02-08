var Reflux = require('reflux');
var DescriptionActions = require('./DescriptionActions');
var Router = require('../../Router.jsx');

var DescriptionStore = Reflux.createStore({
  listenables: DescriptionActions,
  state: {
  },
  notifyListeners: function () {
    this.trigger(this.state);
  },
  onNotifyAll: function () {
    console.log("onNotifyAll");
    this.notifyListeners();
  },
  onOpenBeerDescription : function(beerId){
    this.state = {id : beerId};
    this.notifyListeners();
    Router.transitionTo("/description");
  },
  onOpenDishDescription : function(dishId){
    this.state = {id : dishId};
    this.notifyListeners();
    Router.transitionTo("/description");
  },
  onPopulateDescription : function(description){
    this.state.description = description;
    this.notifyListeners();
  }
});

module.exports = DescriptionStore;
