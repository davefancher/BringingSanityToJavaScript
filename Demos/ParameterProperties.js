var ParameterProperties;
(function (ParameterProperties) {
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
        var c = new Circle(4);

        var result = "The circle's radius is " + c.radius + "<br />";
        result += "The circle's area is " + c.getArea();
        return result;
    }
    ParameterProperties.RunDemo = RunDemo;
})(ParameterProperties || (ParameterProperties = {}));
//# sourceMappingURL=ParameterProperties.js.map
