var TypeCompatibility;
(function (TypeCompatibility) {
    function describeArea(shape) {
        return "The shape's area is: " + shape.getArea();
    }

    function createCircle(radius) {
        return { getArea: function () {
                return Math.PI * Math.pow(radius, 2);
            } };
    }

    function RunDemo() {
        var radius = 2;
        return describeArea(createCircle(radius));
    }
    TypeCompatibility.RunDemo = RunDemo;
})(TypeCompatibility || (TypeCompatibility = {}));
//# sourceMappingURL=TypeCompatibility.js.map
