var FunctionOverloading;
(function (FunctionOverloading) {
    function formatName() {
        var first = arguments[0];
        var last = arguments[1];
        var middle = arguments.length > 2 ? arguments[2] : undefined;
        return first + ", " + last + (middle ? " " + middle : "");
    }

    function RunDemo() {
        return formatName("John", "Public", "Q");
    }
    FunctionOverloading.RunDemo = RunDemo;
})(FunctionOverloading || (FunctionOverloading = {}));
//# sourceMappingURL=FunctionOverloading.js.map
