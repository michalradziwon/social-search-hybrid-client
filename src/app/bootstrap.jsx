(function () {
  //Needed for React Developer Tools
  window.React = require('react');

  //Needed for onTouchTap (Can go away when react 1.0 release)
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  // Run router! That will start the app!
  require('./Router.jsx').run(document.body);


  document.addEventListener("deviceready",function(){
    console.log("deviceReady!");
  },false);
})();