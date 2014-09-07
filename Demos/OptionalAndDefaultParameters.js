var OptionalParameters;
(function (OptionalParameters) {
    function formatName(first, last, middle) {
        return last + ", " + first + " " + middle;
    }

    function RunDemo() {
        return formatName("John", "Public", "Q");
    }
    OptionalParameters.RunDemo = RunDemo;
})(OptionalParameters || (OptionalParameters = {}));
//# sourceMappingURL=OptionalAndDefaultParameters.js.map
