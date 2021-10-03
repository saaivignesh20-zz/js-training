// if statement - conditional checks
const billPaid = true;
const foodDelivered = false;

console.log("Testing if condition:");
if (foodDelivered == true && billPaid == true) {
    console.log("Thank you for paying the bill, your food has been delivered.");
} else if (foodDelivered == false && billPaid == true) {
    console.log("Thank you for paying the bill, your food will be delivered shortly.");
} else if (foodDelivered == true && billPaid == false) {
    console.log("Your food has been delivered! To pay the bill, logon to the app.");
}