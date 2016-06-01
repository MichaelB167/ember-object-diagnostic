'use strict';

const Order = Ember.object.extend({
  price: this.get('price'),
  quantity: this.get('quantity'),
  orderPrice: Ember.computed('price', 'quantity', function(){
    return this.get(price * quantity);
  })
});

const Cart = Ember.object.extend({
  addToCart: function(){
    let orders = [];
    Cart.orders.pushObject('item');
  }
  totalPrice: Ember.computed('orderPrice', function(){
    let orderPrice = this.get('orderPrice');
    return this.get(orderPrice)
  })
});

let newCart = Cart.create({
  order1: Ember.Object.create({ quantity: 2, name: 'hats', price: 5 }),
  order2: Ember.Object.create({ quantity: 1, name: 'desk lamp', price: 20 }),
  order3: Ember.Object.create({ quantity: 3, name: 'hand towels', price: 8 }),
})
