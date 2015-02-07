var React = require('react');
var mui = require('material-ui');
var Swipper = require('./Swipper.jsx');
var {
  Tab,Tabs
  } = mui;

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <Tabs>
          <Tab label="Tab one" >
            <div className="tab-template-container">
              <h2 className="mui-font-style-headline">Welcome in Dendryt!</h2>
              <p>
              How do you feel today&#63;
              </p>
              <p>
              Can I help you&#63;
              </p>
            </div>
          </Tab>
          <Tab label="Swipper" >
            <Swipper/>
          </Tab>
        </Tabs>
      </div>
    );
  }
});

module.exports = Home;