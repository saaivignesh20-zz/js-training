// switch statment          - alternative single condition test statement

console.log("\nTesting switch statement...");

const BOOLEAN_VAL = false;

switch(BOOLEAN_VAL) {
    case true:
        console.log("The value is TRUE");
        break;
    case false:
        console.log("The value is FALSE");
        break;
    default:
        console.log("The value is neither TRUE nor FALSE");
        break;
}

const STRING_VAL = "Orange";

switch(STRING_VAL) {
    case "Apple":
        console.log("Rich in Vitamin C");
        break;
    case "Banana":
        console.log("Rich in Potassium");
        break;
    case "Orange":
        console.log("Very Rich in Vitamin C");
        break;
    default:
        console.log("Not a Fruit");
        break;
}