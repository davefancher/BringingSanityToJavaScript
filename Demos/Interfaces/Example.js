var Interfaces;
(function (Interfaces) {
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
        var c = new Circle(1);
        return "The circle's radius is " + c.radius + "<br />" + "The circle's area is " + c.getArea();
    }
    Interfaces.RunDemo = RunDemo;
})(Interfaces || (Interfaces = {}));
