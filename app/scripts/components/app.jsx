var React = require('react');

var HeaderComponent = require('./header.jsx').HeaderComponent;

var AppComponent = React.createClass({
  render: function(){
    return(
      <div className='contain'>
        <HeaderComponent />
      </div>
    )
  }
});

module.exports = {
  AppComponent : AppComponent
}
