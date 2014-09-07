module StandardEnumerations {
  enum Shape {
    Circle,
    Rectangle,
    Triangle
  }

  function getArea(shape: Shape, ...dimensions: number[]) {
    switch (shape) {
      case Shape.Circle:
        return Math.PI * Math.pow(dimensions[0], 2);

      case Shape.Rectangle:
        return dimensions[0] * dimensions[1];
        break;

      case Shape.Triangle:
        return dimensions.reduce((s, c, ix) => s + c, 0) / 2;
    }

    throw "Unknown shape type";
  }

  export function RunDemo() {
    return "Circle (5) -> " + getArea(Shape.Circle, 5) + "<br />" +
      "Rectangle (4, 5) -> " + getArea(Shape.Rectangle, 4, 5) + "<br />" +
      "Triangle (3, 4, 5) -> " + getArea(Shape.Triangle, 3, 4, 5) + "<br />";
  }
}