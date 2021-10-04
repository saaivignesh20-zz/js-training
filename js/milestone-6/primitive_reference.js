// Primitive and Reference Values

/*
    Primitive Values
*/
console.log("JS Primitive Values:\n")
// primitive values are stored in stack:
// eg: undefined, null, boolean, number, string, and symbol
var number = 10;
var string = "hello world";
var boolean = false;
var notdefined = undefined;
var thisisnull = null;
var symbol = Symbol("sym");

// copying primitive values and modifying them does not affect original value
// (values are copied to new location) / (duplicated in stack)
var numberCopy = number
var stringCopy = string
var booleanCopy = boolean;
var notdefinedCopy = notdefined;
var nullCopy = thisisnull;
var symbolCopy = symbol;
numberCopy = number + 10;
stringCopy = string + " to all";
booleanCopy = !boolean;
notdefinedCopy = "undefined has changed now";
nullCopy = thisisnull;
symbolCopy = Symbol("hello");

// print original values
console.log(number);
console.log(string);
console.log(boolean);
console.log(notdefined);
console.log(thisisnull);
console.log(symbol);

// print copied and modified values
console.log(numberCopy);
console.log(stringCopy);
console.log(booleanCopy);
console.log(notdefinedCopy);
console.log(nullCopy);
console.log(symbolCopy);

/*
    Reference Values
*/

console.log("JS Primitive Values:\n");

// reference values are stored in heap
// eg: object

var object = {
    name: "John",
    age: 18,
    address: {
        line1: "2nd Street",
        line2: "Ramapuram"
    },
};

// copying objects copies the reference only and modifying them modifies
// the original object

var objectCopy = object;

console.log("Original & Copied Object (before modification):");
console.log(object);
console.log(objectCopy);

// modifying copied object
objectCopy.name = "Jack";
objectCopy.age = 20;

console.log("Original & Copied Object (after modification):");
console.log(object);
console.log(objectCopy);

// shallow copying of object
var shallowCopy = Object.assign({}, object);
var deepCopy = JSON.parse(JSON.stringify(object));

shallowCopy.name = "John";
shallowCopy.age = 18;
shallowCopy.address.line1 = "1st Street";
shallowCopy.address.line2 = "Taramani";
deepCopy.name = "Jack";
deepCopy.age = 20;

console.log("\nOriginal Object:");
console.log(object);
console.log("\nShallow Copy:");
console.log(shallowCopy);
console.log("\nDeep Copy:");
console.log(deepCopy);

//  same happens with argument passing to functions:
//      1. primitives are passed by value
//      2. objects are passed by reference

console.log("Passing primitives and references to functions Test:");
console.log("Before Calling the Function:");
var prim = 200;

var obj = {
    name: "Ken Adams",
    age: 26
}

console.log("Primitive:", prim);
console.log("Object:", obj);

function changePrimitive(arg) {
    console.log("\nChanging primitive argument...");
    arg = arg + 2;
}

function changeObject(arg) {
    console.log("Changing object argument...");
    arg.name = "Regina Phalange";
    arg.age = "30";
}

changePrimitive(prim);
changeObject(obj);

console.log("\nAfter calling the function:");
console.log("Primitive:", prim);
console.log("Object:", obj);

// determining type of variables

// for primitives
console.log("number type:", typeof number);
console.log("string type:", typeof string);
console.log("boolean type:", typeof boolean);
console.log("notdefined type:", typeof notdefined);
console.log("thisisnull type:", typeof thisisnull);
console.log("symbol type:", typeof symbol);

// for objects

// if we want to check if it is an object first:
console.log("Determining whether variable is object type:");
console.log("variable object type:", typeof object);
console.log("variable shallowCopy type:", typeof shallowCopy);
console.log("variable shallowCopy type:", typeof shallowCopy);

// if we want to check it's class type
console.log("\nDetermining type of class objects:");
var s = new String("hello world");
class Shape {}
var shape = new Shape();
console.log("typeof s is a string?:", s instanceof String);
console.log("typeof shape is a Shape?:", shape instanceof Shape);