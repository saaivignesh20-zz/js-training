// Scope Chain Augmentation

/*
    Two statements can create new scope:
        * with statement - operates on given object parameter
        * catch statement in try-catch block - contains the declaration for thrown error object
*/

// Demo for with
const obj1 = {
    firstname: "Chandler",
    lastname: "Bing",
    destination: "Yemen"
};

console.log("With Statment:");
with(obj1) {
    console.log(firstname, lastname, "is going to", destination);
}

const obj2 = {
    firstname: "Chandler",
    lastname: "Bing",
};

with(obj2) {
    obj2.fullname = firstname + " " + lastname;
}

console.log("Changed object using with statement:", obj2);

console.log("Try-Catch Block:");

// try-catch block
try {
    console.log("\nI'm going to throw an exception now!");
    throw "This is an exception!";
} catch (err) {
    console.log("Exception Caught:", err);
}


try {
    console.log("\nI'm going to throw an error object now!");
    throw Error("This is an error object");
} catch (err) {
    console.log("Error Caught:", err);
}