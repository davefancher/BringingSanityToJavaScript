var TypeCompatibility;
(function (TypeCompatibility) {
    function describeArea(shape) {
        return "The shape's area is: " + shape.getArea();
    }
    function createCircle(radius) {
        return { getArea: function () { return Math.PI * Math.pow(radius, 2); } };
    }
    function createRectangle(width, height) {
        return { getArea: function () { return width * height; } };
    }
    function RunDemo() {
        return describeArea(createCircle(2)) + "<br />" + describeArea(createRectangle(2, 3));
    }
    TypeCompatibility.RunDemo = RunDemo;
})(TypeCompatibility || (TypeCompatibility = {}));
