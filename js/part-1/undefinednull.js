// undefined & null
var testVar1             // meaning that the variable is declared but not defined
var testVar2 = null;     // declared and defined but meaning is "no value"
console.log(testVar1);
console.log(testVar2);
console.log("typeof null:", typeof null); // 0x00 in ECMA Spec is type tag for object
console.log("typeof undefined:", typeof undefined);