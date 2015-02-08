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
  FlatButton,
  Menu
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
    if (this.state.description && this.state.description.descriptionType) {

      var d = this.state.description;

      var labelMenuItems = [
        { payload: '1', text: 'ABV', data: d.abv, icon: 'home' },
        { payload: '2', text: 'Carbs', data: d.carbs, icon: 'home' },
        { payload: '3', text: 'Energy', data: d.energy, icon: 'home' },
        //{ payload: '4', text: 'Fat', data: d.fat, icon: 'home' },
        //{ payload: '5', text: 'Contains gluten', data: d.glutenFree, icon: 'home' },
        { payload: '6', text: 'Grains', data: d.grains, icon: 'home' },
        //{ payload: '7', text: 'Protein', data: d.protein, icon: 'home' },
        { payload: '8', text: 'Serving size', data: d.servingSize, icon: 'home' }
      ];



      var topDivStyle = {"float":"left", "padding-left":"50px"};
      desc = <div>
        <div style={topDivStyle}><img src={BeerImageUtil.getBeerImage(d)}/></div>
        <div><Menu menuItems={labelMenuItems} /></div>
      </div>
    }

  return (
      <div>
        <IconButton icon="image-navigate-before" onTouchTap={this.goToPrevious}/>
        <div className="component-doc">
          <mui.Paper className="code-example">
            {desc}
          </mui.Paper>
        </div>
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
