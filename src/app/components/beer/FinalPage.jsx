var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var BeerStore = require('./BeerStore');
var FinalChoiceStore = require('./FinalChoiceStore');
var FinalChoiceActions = require('./FinalChoiceActions');
var BeerActions = require('./BeerActions');
var {
  IconButton
  } = mui;
var Router = require('../../Router.jsx');

var Swipe = require("react-swipper");


/**
 * returns an image for a given beer object. for most of beers the url is included in the beer object.
 * if the URL is not included, we are returning hardcoded image.... for details see the code below.
 * <p>
 *   This is probably the full list of beers without defined image URL:
 *
 *   STELLA ARTOIS CIDRE PEAR
 *   STELLA ARTOIS
 *   Stella Artois
 *   STELLA ARTOIS 4%
 *
 *   BECK'S PREMIER LIGHT
 *   BECK'S VIER
 *
 *   BUDWEISER
 *   BUDWEISER BREW NO.66
 *
 *
 *   BODDINGTON'S DRAUGHT
 *
 *   BASS PREMIUM PALE ALE
 *   GOLD LABEL
 *
 *   </p>
 */
var getBeerImage = function(beerObj){
  if(beerObj.imageUrl && beerObj.imageUrl.length > 0){
    return beerObj.imageUrl;
  }else{
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("STELLA") != -1){
      return "http://tapintoyourbeer.com/documents/img_brand_stella7.png"; // thats image for "id":"423","name":"Stella Artois"
    }
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BECK") != -1){
      return "http://tapintoyourbeer.com/documents/img_brand_becks3.png"; // thats image for "id":"27","name":"Beck's"
    }
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BUDWEISER") != -1){
      return "http://tapintoyourbeer.com/documents/Budweiser%20UK.png"; // thats image for "id":"21","name":"Budweiser"
    }

    // UGLY ONE (we are serving image of a different taste of that beer)
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BODDINGTON") != -1){
      return "http://tapintoyourbeer.com/documents/Boddingtons.png"; // thats image for "id":"69","name":"Boddingtons Pub Ale"
    }

    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BASS PREMIUM") != -1){
      return "http://tapintoyourbeer.com/documents/BASS%20PALE%20ALE.png"; // thats image for "id":"211","name":"Bass Pale Ale"
    }

    // UGLY !!! there is no similar beer in the entire repository -- we return a link from external page
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("GOLD LABEL") != -1){
      return "http://www.kbsinstitute.org/images/pullo/1629.jpg";
    }



    /*

     */
  }

};


var FinalPage = React.createClass({
  seq : 0,
  mixins: [
    Reflux.ListenerMixin
  ],
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {
    this.listenTo(BeerStore, this.onBeerStoreChanged);
    this.listenTo(FinalChoiceStore, this.onFinalChoiceStoreChanged);
    BeerActions.notifyAll();
    FinalChoiceActions.notifyAll();
  },
  render: function () {


    // FIXME FIXME FIXME FIXME
    // extremely ugly hack.
    // this is a workaround for a scenario when the availableBeers/Dishes are updated and during the render() call, the Swiper was not updating itself.....
    var seq1 = this.seq++;
    var seq2 = this.seq++;


    var availableBeers = this.state.availableBeers ?         (<Swipe key={seq1} className="swipper">
        {this.state.availableBeers.map(function (beer) {
          return <div key={beer.id}>
            <b>{beer.name} <img src={getBeerImage(beer)}/></b>
          </div>;
        })}
        </Swipe>) : null;

    var availableDishes = this.state.availableDishes ? (<Swipe key={seq2} className="swipper">
    {this.state.availableDishes.map(function (dish) {
        return <div key={dish.name}>
          <b>{dish.name}</b>
        </div>;
      }
    )}</Swipe>) : null;
    return (
      <div>
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
        {availableBeers}
        {availableDishes}
      </div>
    );
  },
  goToPrevious: function () {
    Router.transitionTo("/second"); // TODO later - move to action layer...
  },
  onBeerStoreChanged(newState) {
    //this.setState(newState);
  },
  onFinalChoiceStoreChanged: function (newState) {
    this.setState(newState);
  }

});

module.exports = FinalPage;
