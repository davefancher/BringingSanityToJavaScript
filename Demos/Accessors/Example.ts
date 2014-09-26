module Accessors {
  class Circle {
    private _radius: number;

    constructor(radius: number) {
      this._radius = radius;
    }

    get radius() {
      return this._radius;
    }

    set radius(value) {
      this._radius = value;
    }

    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }

  export function RunDemo() {
    var c = new Circle(5);
    c.radius = 3;

    return "The circle's radius is " + c.radius + "<br />" +
           "The circle's area is " + c.getArea();
  }
} 