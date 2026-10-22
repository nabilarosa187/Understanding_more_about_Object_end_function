const product = { name: "keyboard", price: 250000, stock: 10 };

console.log ("Before:", product);
product.price = 275000;
product.stock += 5;
console.log("After:", product);