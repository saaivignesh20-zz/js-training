// identifiers

// var   -   global and function scope
// let   -   block scope
// const -   block scope


const PI = 3.14;         // capital letters
var radius1 = 2;         // letters with ending number
var _area = 0;           // underscore and letters
let $power1 = 2;         // dollar with letter and number

function findArea() {    // identifier used in function
    let area = PI * radius1 * radius1;
    return area;
}
console.log(findArea());