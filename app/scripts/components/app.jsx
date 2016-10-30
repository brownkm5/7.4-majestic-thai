var React = require('react');

//components
var HeaderComponent = require('./header.jsx').HeaderComponent;
var MenuContainer = require('./menu.jsx').MenuContainer;
//var OrderContainer = require('./order.jsx').OrderContainer;

//models and collections
var itemModel = require('../models/order.js').Order;
var OrderCollection = require('../models/order.js').OrderCollection;

var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var orderList =  new OrderCollection();
    console.log(orderList);
    orderList.fetch().then(function(){
      self.setState({orderCollection: orderList});
    });

    return {
      orderCollection: orderList
    }
  },
  addItem: function(itemModel){
    this.state.orderCollection.create(itemModel);
    this.setState({orderCollection: this.state.orderCollection});
    console.log('ordercollection', this.state.orderCollection);
  },
  render: function(){
    return(
      <div className='contain'>
        <HeaderComponent />
        <MenuContainer addItem={this.addItem}/>
      </div>
    )
  }
});

module.exports = {
  AppComponent : AppComponent
}
