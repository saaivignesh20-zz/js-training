class Shape {
    getArea() {
        return 0;
    }
    myName() {
        return "Shape";
    }
    toString() {
        return "I'm Shape";
    }
}

class Circle extends Shape {
    getArea(r) {
        return 3.14 * r * r;
    }
    whatAmI() {
        return myName();
    }
    toString() {
        return "I'm Circle";
    }
}

circle = new Circle();
area = circle.getArea(10);
circleStr = circle.toString();
shapeProto = Object.getPrototypeOf(new Shape());
circleProto = Object.getPrototypeOf(new Circle());
console.log(typeof circleProto);
console.log(circleProto instanceof Circle);