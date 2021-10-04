/* this binding */

function foo() {
  x = 'good';
  function boo() {
      console.log(this.x);
  }
  boo();
}

foo();

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

// explicit binding (functions) - understanding diff between call(), apply(), bind()
function getFruitName(index) {
  return this.fruits[index];
}

var obj = {
  fruits: ['Apple', 'Banana', 'Orange', 'Pomogranate'],
}

console.log("'this' binding using call()  [index 0]:", getFruitName.call(obj, 0));
console.log("'this' binding using apply() [index 1]:", getFruitName.apply(obj, [1]));
console.log("'this' binding using bind()  [index 2]:", getFruitName.bind(obj, 2)());

// this binding in classes:
console.log("Testing 'this' in class context:");
class Shape {}

class Circle extends Shape {
  constructor(r) {
      super();      // should be called in derived classes
      this.r = r;
  }
  findArea() {
      return 3.14 * (this.r ** 2);
  }
}

var circle = new Circle(10);
console.log("Area of circle:", circle.findArea());