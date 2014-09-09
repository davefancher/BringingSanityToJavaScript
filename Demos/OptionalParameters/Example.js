var OptionalParameters;
(function (OptionalParameters) {
    function formatName(first, last, middle) {
        return last + ", " + first + (middle ? " " + middle : "");
    }

    function RunDemo() {
        return formatName("John", "Public") + "<br />" + formatName("John", "Public", "Q");
    }
    OptionalParameters.RunDemo = RunDemo;
})(OptionalParameters || (OptionalParameters = {}));
//# sourceMappingURL=Example.js.map
