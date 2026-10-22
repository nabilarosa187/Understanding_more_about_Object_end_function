const order = {
items: [
    { name: "Notebook", price: 15000, quantity: 3 },
    { name: "Pen", price: 5000, quantity: 10 },
    { name: "Backpack", price: 200000, quantity: 1 },
],

getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
},
};

console.log("Items:", order.items.length);
console.log("Total:", order.getTotal());