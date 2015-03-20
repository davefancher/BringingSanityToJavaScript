var ConstEnumerations;
(function (ConstEnumerations) {
    function getArea(shape) {
        var dimensions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dimensions[_i - 1] = arguments[_i];
        }
        switch (shape) {
            case 0 /* Circle */:
                return Math.PI * Math.pow(dimensions[0], 2);
            case 1 /* Rectangle */:
                return dimensions[0] * dimensions[1];
                break;
            case 2 /* Triangle */:
                return dimensions.reduce(function (s, c, ix) { return s + c; }, 0) / 2;
        }
        throw "Unknown shape type";
    }
    function RunDemo() {
        return "Circle (5) -> " + getArea(0 /* Circle */, 5) + "<br />" + "Rectangle (4, 5) -> " + getArea(1 /* Rectangle */, 4, 5) + "<br />" + "Triangle (3, 4, 5) -> " + getArea(2 /* Triangle */, 3, 4, 5) + "<br />";
    }
    ConstEnumerations.RunDemo = RunDemo;
})(ConstEnumerations || (ConstEnumerations = {}));
