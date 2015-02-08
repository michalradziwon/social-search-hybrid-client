var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');

var Router = require('../../Router.jsx');
var DescriptionStore = require('./DescriptionStore');
var DescriptionActions = require('./DescriptionActions');

var BeerImageUtil = require('./BeerImageUtil');

var {
  IconButton,
  RaisedButton,
  FlatButton
  } = mui;

var Description = React.createClass({
  mixins: [
    Reflux.ListenerMixin
  ],
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {
    this.listenTo(DescriptionStore, this.onDescriptionStoreChanged);
    DescriptionActions.notifyAll();
  },
  render: function () {
    var desc;
    if(this.state.description && this.state.description.descriptionType){
      var d = this.state.description;
      desc = <div><img src={BeerImageUtil.getBeerImage(d)}/><ul>
        <li>ABV: {d.abv}</li>
        <li>Carbs: {d.carbs}</li>
        <li>Energy: {d.energy}</li>
        <li>Fat: {d.fat}</li>
        <li>Contains gluten: {d.glutenFree}</li>
        <li>Grains: {d.grains}</li>
        <li>Protein: {d.protein}</li>
        <li>Serving size: {d.servingSize}</li>
        </ul>
      </div>
    }

    return (
      <div>
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
      {desc}
      </div>
    );
  },
  goToPrevious: function () {
    Router.transitionTo("/final"); // TODO later - move to action layer...
  },
  onDescriptionStoreChanged(newState) {
    this.setState(newState);
  }

});

module.exports = Description;
