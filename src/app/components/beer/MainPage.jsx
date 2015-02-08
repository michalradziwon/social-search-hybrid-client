var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');

var Router = require('../../Router.jsx');
var BeerStore = require('./BeerStore');
var BeerActions = require('./BeerActions');

var Q = require('q');
var BeerServiceClient = require('../../remote/BeerServiceClient');


var {
  IconButton,
  RaisedButton,
  FlatButton
  } = mui;

var MainPage = React.createClass({
  mixins: [
    Reflux.ListenerMixin
  ],
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {
    this.listenTo(BeerStore, this.onBeerStoreChanged);
    BeerActions.notifyAll();
  },
  render: function () {
    return (
      <div>
        <div>
        {this.state.pairingType == "Accentuate" ? <RaisedButton label="Accentuate" primary={true} /> : <FlatButton label="Accentuate" primary={true} onTouchTap={this.onTouch("Accentuate")}/> }
          {this.state.pairingType == "ALL" ? <RaisedButton label="ALL" primary={true} /> : <FlatButton label="ALL" primary={true} onTouchTap={this.onTouch("ALL")}/> }
          {this.state.pairingType == "Contrast" ? <RaisedButton label="Contrast" primary={true} /> : <FlatButton label="Contrast" primary={true} onTouchTap={this.onTouch("Contrast")}/> }
        </div>
        <IconButton icon="image-navigate-next" onTouchTap={this.onTouchNextPage} disabled ={!this.state.pairingType}/>
        <IconButton icon="image-photo-camera" onTouchTap={this.onTakePhoto} />
      </div>
    );
  },
  onTouch: function (_selected) {
    return function () {
      BeerActions.pairingTypeChanged(_selected);
    }.bind(this);
  },
  onTouchNextPage: function () {
    if (this.state.pairingType) {
      Router.transitionTo("/second"); // TODO later - move to action layer...
    }
  },
  onTakePhoto: function () {
    console.log("about to take a photo");
    navigator.camera.getPicture(function (base64photo) {
      console.log("sending photo to backend" + (base64photo ? base64photo.length : 0));

      navigator.speech.startSpeaking("Sending photo to server", {voice_name: 'Catherine'});
      Q.delay(2000).then(function () {
        BeerServiceClient.recognizeBeerImage(base64photo).then(function (resp) {
          console.log("recognized " + JSON.stringify(resp));
          if (resp.beers && resp.beers[0] && resp.beers[0].id) {
            // FIXME sorry ... refactor that later... the logic should be moved from view!!!
            navigator.speech.startSpeaking("Image successfully recognized", {voice_name: 'Catherine'});
            BeerActions.beerSelected(resp.beers[0]);
          } else{
            navigator.speech.startSpeaking("Could not recognize the beverage", {voice_name: 'Catherine'});
          }
        });
      });

    }, function (err) {
      console.log("ERROR while taking a photo" + err);
    }, {
      destinationType: 0,
      targetWidth: 700
    });
  },
  onBeerStoreChanged(newState) {
    this.setState(newState);
  }

});

module.exports = MainPage;
