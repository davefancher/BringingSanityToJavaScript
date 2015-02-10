var DefaultParameters;
(function (DefaultParameters) {
    function formatName(first, last, middle) {
        if (middle === void 0) { middle = ""; }
        return last + ", " + first + (middle !== "" ? " " + middle : "");
    }
    function RunDemo() {
        return formatName("John", "Public") + "<br />" + formatName("John", "Public", "Q");
    }
    DefaultParameters.RunDemo = RunDemo;
})(DefaultParameters || (DefaultParameters = {}));
//# sourceMappingURL=Example.js.map