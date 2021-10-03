/*

*/

// objects

// object literals
const fruit = {};
fruit.name = "Orange";
fruit.taste = "Sour";
console.log(fruit);

// object constructor
console.log(new Date())         // using in-built Date object

function Shape() {              // using object constructor
    this.type = "circle";
}
console.log(new Shape());