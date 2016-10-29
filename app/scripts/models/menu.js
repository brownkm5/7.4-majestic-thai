var Backbone = require('backbone');

var SoupSaladModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var SoupSaladCollection = Backbone.Collection.extend({
  model: SoupSaladModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kevinmealstrial2'
});

module.exports = {
  SoupSaladCollection: SoupSaladCollection
}
