var React = require('react');

var OrderCollection = require('../models/menu.js').OrderCollection;

function Header(){
  return <h4 className='order-header'>Your Order</h4>
}

var OrderCalculator = React.createClass({
  handleSubmit: function(){
    var collection = this.props.collection;
    this.props.handleSubmit(this.props.collection);
  },
  render: function(){
    var collection = this.props.collection;
    //console.log(collection);
    var itemList = collection.map(function(item){
      return <li key={item.get('_id') || item.cid} className='order-item'>{item.get('title')}</li>
    });
    var priceList = collection.map(function(item){
      return <li key={item.get('_id') || item.cid} className='item-price'>{item.get('price')}</li>
    });
    //move this stuff to collection {this.props.collection.total()
    //make an array with just the prices in it to find the total price
    var priceArray = collection.map(function(item){
      return item.get('price');
    });
    // converts string values in the array to integer values
    var numberConvertedArray = priceArray.map(Number);
    // reduce those values into the total price
    var total = numberConvertedArray.reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    },0);
    //make the total have only two decimal values
    var subtotal = total.toFixed(2);
    console.log(subtotal);
    return(
        <div className='order-box'>
          <div className="item-column">
            <h3 className='item'>Item</h3>
            <ul className='height'>{itemList}</ul>
          </div>
          <div className='price-column'>
            <h3 className='price'>Price</h3>
            <ul>{priceList}</ul>
          </div>
          <div className='subtotal-area'><h3 className='total'>Subtotal</h3><span className='subtotal'>$ {subtotal}</span></div>
          <div className="button-div">
            <button onClick={this.handleSubmit} className='submit-order btn btn-default' type="button" name="button">Submit Order</button>
          </div>
        </div>
    )
  }
});

var OrderContainer = React.createClass({
  render: function(){
    return(
        <div className="order-form">
          <div className='col-sm-5 col-sm-offset-1'>
            <div className='well'>
              <Header />
              <OrderCalculator collection={this.props.collection} handleSubmit={this.props.handleSubmit}/>
            </div>
          </div>
        </div>
    )
  }
});

module.exports = {
  OrderContainer: OrderContainer
};
