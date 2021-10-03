// with statement           - officially not recommended and disabled in strict mode

console.log("\nTesting with statement...");

let a, x, y;
const r = 10;

with (Math) {
    a = PI * r * r;
    x = r * cos(PI);
    y = r * sin(PI / 2);
}

console.log(`a = ${a}; x = ${x}; y = ${y}`);