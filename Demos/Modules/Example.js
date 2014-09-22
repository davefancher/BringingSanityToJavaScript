var ShapeGeometry;
(function (ShapeGeometry) {
    var Circle = (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        return Circle;
    })();
    ShapeGeometry.Circle = Circle;

    var Rectangle = (function () {
        function Rectangle(width, height) {
            this.width = width;
            this.height = height;
        }
        return Rectangle;
    })();
    ShapeGeometry.Rectangle = Rectangle;

    var Triangle = (function () {
        function Triangle(leg1, leg2, leg3) {
            this.leg1 = leg1;
            this.leg2 = leg2;
            this.leg3 = leg3;
        }
        return Triangle;
    })();
    ShapeGeometry.Triangle = Triangle;

    function getArea(s) {
        if (s instanceof Circle) {
            var c = s;
            return Math.PI * Math.pow(c.radius, 2);
        } else if (s instanceof Rectangle) {
            var r = s;
            return r.width * r.height;
        } else if (s instanceof Triangle) {
            var t = s;
            return 0.5 * (t.leg1 + t.leg2 + t.leg3);
        }
    }
    ShapeGeometry.getArea = getArea;
})(ShapeGeometry || (ShapeGeometry = {}));

var ModuleDemo;
(function (ModuleDemo) {
    var circle = ShapeGeometry.Circle;
    var rect = ShapeGeometry.Rectangle;
    var triangle = ShapeGeometry.Triangle;
    var getArea = ShapeGeometry.getArea;

    function RunDemo() {
        return "Circle area: " + getArea(new circle(5)) + "<br />" + "Rectangle area: " + getArea(new rect(2, 3)) + "<br />" + "Triangle area: " + getArea(new triangle(2, 3, 4));
    }
    ModuleDemo.RunDemo = RunDemo;
})(ModuleDemo || (ModuleDemo = {}));
//# sourceMappingURL=Example.js.map
