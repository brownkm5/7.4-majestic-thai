var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kevinorderstrial'
});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection
}
