var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');

var Router = require('../../Router.jsx');
var BeerStore = require('./BeerStore');
var BeerActions = require('./BeerActions');


var {
  IconButton,
  RaisedButton,
  FlatButton
  } = mui;

var MainPage = React.createClass({
  mixins: [
    Reflux.ListenerMixin
  ],
  getInitialState:function(){
    return {};
  },
  componentDidMount:function(){
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
      </div>
    );
  },
  onTouch: function (_selected) {
    return function () {
      BeerActions.pairingTypeChanged(_selected);
    }.bind(this);
  },
  onTouchNextPage: function () {
    if(this.state.pairingType){
      Router.transitionTo("/second"); // TODO later - move to action layer...
    }
  },
  onBeerStoreChanged(newState){
    this.setState(newState);
  }

});

module.exports = MainPage;
