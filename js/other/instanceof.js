const PI = 22 / 7;

// Circle Class
class Circle {
    findArea(radius) {
        return PI * radius * radius;
    }
}

// Square Class
function Square(s) {
    this.side = s;
    this.findArea = function findArea() {
        return s * s;
    }
}

// circle object
circle = new Circle();
console.log(circle.findArea(10));
console.log(circle instanceof Circle);

// square object
square = new Square(10);
console.log(square.findArea());
console.log(square instanceof Square);