module TypeCompatibility {
  interface Shape {
    getArea(): number;
  }

  function describeArea(shape: Shape) {
    return "The shape's area is: " + shape.getArea();
  }

  function createCircle(radius: number) {
    return { getArea: () => Math.PI * Math.pow(radius, 2) }
  }

  export function RunDemo() {
    var radius = 2;
    return describeArea(createCircle(radius));
  }
} 