var Classes;
(function (Classes) {
    var Circle = (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * Math.pow(this.radius, 2);
        };
        return Circle;
    })();

    function RunDemo() {
        var c = new Circle(5);

        var result = "The circle's radius is " + c.radius + "<br />";
        result += "The circle's area is " + c.getArea();
        return result;
    }
    Classes.RunDemo = RunDemo;
})(Classes || (Classes = {}));
//# sourceMappingURL=Classes.js.map
