// app.js

const products = require('./product')
const cart = require('./cart')
const calculateTotal = require('./order')


// Add product to the cart
cart.addToCart(products[0])
cart.addToCart(products[2])

// Display the cart items
console.log("Cart items:", cart.getCartItems());

// Calculate and display the total order amount;
const totalAmount = calculateTotal(cart.getCartItems());
console.log(`Total order amount: \$ ${totalAmount}`);