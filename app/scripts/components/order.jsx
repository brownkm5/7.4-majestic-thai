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
    var priceArray = collection.map(function(item){
      return item.get('price');
    });
    // console.log(priceArray);
    var numberConvertedArray = priceArray.map(Number);
    console.log(numberConvertedArray);
    var subtotal = numberConvertedArray.reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    },0);
    console.log(subtotal);
    return(
        <div>
          <div className="item-column">
            <h3 className='item'>Item</h3>
            <ul>{itemList}</ul>
          </div>
          <div className='price-column'>
            <h3 className='price'>Price</h3>
            <ul>{priceList}</ul>
          </div>
          <p><span className='total'>Subtotal</span><span className='subtotal'>{subtotal}</span></p>
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
