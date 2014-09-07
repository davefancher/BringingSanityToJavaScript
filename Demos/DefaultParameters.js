var DefaultParameters;
(function (DefaultParameters) {
    function formatName(first, last, middle) {
        if (typeof middle === "undefined") { middle = ""; }
        return last + ", " + first + (middle !== "" ? " " + middle : "");
    }

    function RunDemo() {
        return formatName("John", "Public") + "<br />" + formatName("John", "Public", "Q");
    }
    DefaultParameters.RunDemo = RunDemo;
})(DefaultParameters || (DefaultParameters = {}));
//# sourceMappingURL=DefaultParameters.js.map
