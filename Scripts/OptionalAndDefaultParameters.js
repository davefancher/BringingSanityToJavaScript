var OptionalAndDefaultParameters;
(function (OptionalAndDefaultParameters) {
    function formatName(first, last, middle) {
        return last + ", " + first + " " + middle;
    }

    function RunDemo() {
        return formatName("John", "Public", "Q");
    }
    OptionalAndDefaultParameters.RunDemo = RunDemo;
})(OptionalAndDefaultParameters || (OptionalAndDefaultParameters = {}));
//# sourceMappingURL=OptionalAndDefaultParameters.js.map
