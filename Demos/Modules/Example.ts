module ShapeGeometry {
  export interface IShape { }

  export class Circle implements IShape {
    constructor(public radius: number) { }
  }

  export class Rectangle implements IShape {
    constructor(public width: number, public height: number) { }
  }

  export class Triangle implements IShape {
    constructor(public leg1: number, public leg2: number, public leg3: number) { }
  }

  export function getArea(s: IShape) {
    if (s instanceof Circle) {
      var c = <Circle> s;
      return Math.PI * Math.pow(c.radius, 2);
    } else if (s instanceof Rectangle) {
      var r = <Rectangle> s;
      return r.width * r.height;
    } else if (s instanceof Triangle) {
      var t = <Triangle> s;
      return 0.5 * (t.leg1 + t.leg2 + t.leg3)
    }
  }
}

module ModuleDemo {
  import circle = ShapeGeometry.Circle;
  import rect = ShapeGeometry.Rectangle;
  import triangle = ShapeGeometry.Triangle;
  import getArea = ShapeGeometry.getArea;

  export function RunDemo() {
    return "Circle area: " + getArea(new circle(5)) + "<br />" +
      "Rectangle area: " + getArea(new rect(2, 3)) + "<br />" +
      "Triangle area: " + getArea(new triangle(2, 3, 4));
  }
}