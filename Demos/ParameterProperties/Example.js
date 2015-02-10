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
        return "The circle's radius is " + c.radius + "<br />" + "The circle's area is " + c.getArea();
    }
    ParameterProperties.RunDemo = RunDemo;
})(ParameterProperties || (ParameterProperties = {}));
//# sourceMappingURL=Example.js.map