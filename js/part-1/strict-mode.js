// strict mode
function testStrict() {
    "use strict";
    console.log("\nStrict mode is enabled now (function-scope)!\n");
        undeclaredVariable = 15;   // assigning value to undeclared global variable
        var undefined = 5;         // Assignment to a non-writable global
        var Infinity = 5;          // Assignment to a non-writable global

        // duplicate parameters
        function diff(a, b, b) {
            'use strict';
            return a - b - b;
        }
        diff();

        // octal notation allowed only with 0o
        var octalNumber = 015;
        var octalNumber = 0o15;
        console.log(octalNumber);

        // cannot set properties on primitives

        // duplicate object properties not allowed
        let a = {b: 1, b: 2};
        console.log(a);
}
testStrict();