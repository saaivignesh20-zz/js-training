// functions

function sayHelloWorld() {              // basic function
    console.log("Hello World!");
}

function printMessage(message) {        // function with 1 parameter
    console.log("The message is: " + message);
}

function printRectangleArea(l, b) {     // function with 2 parameters
    console.log("The area of rectangle is: " + (l * b));
}

function printError(errorCode = 0) {    // function with optional parameter
    if (errorCode == 0) {
        console.log("Engine in Normal Operation");
    } else if (errorCode == 1) {
        console.log("Error Code 1: Abnormal RPM!")
    } else if (errorCode == 2) {
        console.log("Error Code 2: Check Fuse!");
    } else {
        console.log("Unknown Error: Contact Service Immediately!!");
    }
}

console.log("\nTesting functions...\n");
sayHelloWorld()
printMessage("You have passed the test!");
printRectangleArea(5, 10);
printError();
printError(1);