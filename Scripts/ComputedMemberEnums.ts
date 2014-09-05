module ComputedMemberEnums {
  var getArea = r => Math.PI * Math.pow(r, 2);

  enum Circles {
    Small = getArea(1),
    Medium = getArea(5),
    Large = getArea(10)
  }

  function classifyCircle(r) {
    var area = getArea(r);

    if (area <= Circles.Small) return area.toString() + " is a small circle";
    if (area <= Circles.Medium) return area.toString() + " is a medium circle";
    if (area <= Circles.Large) return area.toString() + " is a large circle";

    return area.toString() + " is a gigantic circle";
  }

  export function RunDemo() {
    return [0.5, 3, 7, 15]
      .reduce((state, current, ix, source) => state += classifyCircle(current) + "<br />", "").toString();
  }
} 