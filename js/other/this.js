// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: 'Custom' };

// We declare a variable and the variable is assigned to the global window as its property.
var a = 'Global';

function whatsThis() {
    return this.a;  // The value of this is dependent on how the function is called
}

console.log("Value of this in global and function context:");
console.log(whatsThis());          // undefined
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom'

console.log("Testing 'this' in class context:");
class Shape {
    version = '1.1';
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }
    findArea() {
        return 3.14 * (this.r ** 2);
    }
}

var circle = new Circle(10);
console.log("Area of circle:", circle.findArea());