var React = require('react');

var SoupSaladCollection = require('../models/menu.js').SoupSaladCollection;

var SoupSaladComponent = React.createClass({
  addItem: function(item){
    var itemData = {title:item.get('item'), price: item.get('price')};
    this.props.addItem(itemData);
    console.log('itemdata', itemData);
  },
  render: function(){
    //got the bind code from peter
    var collection = this.props.collection;
    var soupSaladList = collection.map(function(item){
      var addItem = this.addItem.bind(this, item);
      return (
        <li key={item.get('_id') || item.cid} className="well">
          <h4 className='meal-item'>{item.get('item')}</h4>
          <div className='description'>{item.get('description')}</div>
          <button onClick={addItem} className='btn btn-success' type="button" name="button">{item.get('price')}</button>
        </li>
      )
    }.bind(this));
    return(
      <div className='col-sm-6'>
        <h3 className='soups-header'>Soups And Salads</h3>
        <ul className='soups-salads'>
          {soupSaladList}
        </ul>
      </div>
    )
  }

});

var MenuContainer = React.createClass({
  getInitialState: function(){
    var soupSaladCollection = new SoupSaladCollection();
    //console.log(soupSaladCollection);
    return {
      soupSaladCollection: soupSaladCollection
    };
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.soupSaladCollection;

    collection.fetch().then(function(){
      self.setState({collection: collection});
    });
  },
  render: function(){
    return (
      <SoupSaladComponent addItem={this.props.addItem} collection={this.state.soupSaladCollection}/>
    )
  }
});


module.exports = {
  MenuContainer: MenuContainer
};
