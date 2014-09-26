module Classes {
  class Circle {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }

  export function RunDemo() {
    var c = new Circle(5);

    return "The circle's radius is " + c.radius + "<br />" +
           "The circle's area is " + c.getArea();
  }
} 