var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kevinorderstrial2'
  // total: function(){
  //   this.reduce(function(sum, model){
  //     return sum + parseFloat(model.get('price'));
  //   }, 0);
  // }
});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection
}
