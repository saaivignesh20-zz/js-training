// for in statement     - iterating arrays and collections

console.log("\nTesting for-in loop:");

arr = ['banana', 'orange', 'strawberry', 'guava']
for (item_index in arr) {
    console.log(`Index: ${item_index}; Value: ${arr[item_index]}`);
}