module TypeCompatibility {
  interface Shape {
    getArea(): number;
  }

  function describeArea(shape: Shape) {
    return "The shape's area is: " + shape.getArea();
  }

  function createCircle(radius: number) {
    return { getArea: () => Math.PI * Math.pow(radius, 2) };
  }

  function createRectangle(width: number, height: number) {
    return { getArea: () => width * height };
  }

  export function RunDemo() {
    return describeArea(createCircle(2)) + "<br />" +
           describeArea(createRectangle(2, 3));
  }
} 