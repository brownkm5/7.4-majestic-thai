var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//models
var AppComponent = require('./components/app.jsx').AppComponent;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AppComponent),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports= router;
