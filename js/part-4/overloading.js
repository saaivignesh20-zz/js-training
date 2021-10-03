// js does not support function overloading, but we can implement manually

function printMsg(msg) {
    console.log(msg);
}

function printMsg(msg1, msg2) {         // function is overwritten
    console.log(msg1, msg2);
}

printMsg("Hello World");
printMsg("Hello World", "to JavaScript");
console.log("^^^^^ Does not suppport overloading by nature ^^^^^");

console.log("\nManual way:");

var fun1 = function(msg) {
    console.log(msg);
}

var fun2 = function(msg1, msg2) {
    console.log(msg1, msg2);
}

var fun = function() {
    if (arguments.length == 1) {
        fun1(arguments[0]);
    } else {
        fun2(arguments[0], arguments[1]);       // only sends 2 arguments
    }
}

fun("Hello World");
fun("Hello World", "to JavaScript");