var FunctionOverloading;
(function (FunctionOverloading) {
    // Implementation
    function formatName() {
        var first = arguments[0];
        var last = arguments[1];
        var middle = arguments.length > 2 ? arguments[2] : undefined;
        return first + ", " + last + (middle ? " " + middle : "");
    }
    function RunDemo() {
        return formatName("John", "Public", "Q") + "<br />" + formatName("John", "Public");
    }
    FunctionOverloading.RunDemo = RunDemo;
})(FunctionOverloading || (FunctionOverloading = {}));
