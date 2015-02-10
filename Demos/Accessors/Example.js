var Accessors;
(function (Accessors) {
    var Circle = (function () {
        function Circle(radius) {
            this._radius = radius;
        }
        Object.defineProperty(Circle.prototype, "radius", {
            get: function () {
                return this._radius;
            },
            set: function (value) {
                this._radius = value;
            },
            enumerable: true,
            configurable: true
        });
        Circle.prototype.getArea = function () {
            return Math.PI * Math.pow(this.radius, 2);
        };
        return Circle;
    })();
    function RunDemo() {
        var c = new Circle(5);
        c.radius = 3;
        return "The circle's radius is " + c.radius + "<br />" + "The circle's area is " + c.getArea();
    }
    Accessors.RunDemo = RunDemo;
})(Accessors || (Accessors = {}));
//# sourceMappingURL=Example.js.map