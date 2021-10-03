// unary operators:
console.log("\nTesting unary operators:");

// unary arithmetic
console.log("\nUnary Arithmetic operators:");
var unary = 10;
console.log(unary++);
console.log(unary--);
console.log(+"1");
console.log(-"1");

console.log("\nOther unary operators:");

// delete
console.log("delete operator:");
const person = {name: "John", age: 18, married: false};
console.log("Before: ");
console.log(person);
delete person.married;        
console.log("After: ");
console.log(person);

// typeof
console.log("\ntypeof operator:");
const PI = 3.14;
const STRING = "string"
const INTEGER = 300;
const OBJECT = {name: "John", age: 18, married: false};
function fun() {};
console.log("PI is " + typeof(PI));
console.log("STRING is " + typeof(STRING));
console.log("INTEGER is " + typeof(INTEGER));
console.log("OBJECT is " + typeof(OBJECT));
console.log("fun() is " + typeof(fun));

// void
void 1+1;