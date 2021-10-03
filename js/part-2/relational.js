// relational operators

console.log("\nTesting relational operators:");
const OP1 = 1;
const OP2 = true;

console.log(OP1 == OP2);
console.log(OP1 === OP2);
console.log(OP1 != OP2);
console.log(OP1 !== OP2);
console.log(OP1 >= OP2);
console.log(OP1 <= OP2);
console.log(OP1 < OP2);
console.log(OP1 > OP2);

// in
var food = ['idli', 'vada', 'poori', 'dosa', 'pongal'];
console.log('idli' in food);
console.log(0 in food);
console.log(1 in food);

// instanceOf
var date = new Date(1997, 12, 17);
console.log(date instanceof Date);