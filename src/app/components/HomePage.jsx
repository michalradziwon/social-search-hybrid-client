var React = require('react');
var mui = require('material-ui');
var {
  Tab,Tabs
  } = mui;

var Home = React.createClass({
  componentDidMount: function(){
  },
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
          <Tab label="Item Two" >
            <div className="tab-template-container">
              <h2 className="mui-font-style-headline">Another page</h2>
              <p>
              Hi Again.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
});

module.exports = Home;
