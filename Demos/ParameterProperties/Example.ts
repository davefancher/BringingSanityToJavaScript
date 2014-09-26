module ParameterProperties {
  class Circle {
    constructor(public radius: number) { }
    getArea() { return Math.PI * Math.pow(this.radius, 2); }
  }

  export function RunDemo() {
    var c = new Circle(4);

    return "The circle's radius is " + c.radius + "<br />" +
           "The circle's area is " + c.getArea();
  }
}