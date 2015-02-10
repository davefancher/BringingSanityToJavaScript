var RestParameters;
(function (RestParameters) {
    function detokenizeString(format) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return values.reduce(function (state, current, ix) { return state.replace("{" + ix.toString() + "}", current); }, format);
    }
    function RunDemo() {
        return detokenizeString("Hello, {0}! Today is {1}", "Dave", new Date().toLocaleDateString());
    }
    RestParameters.RunDemo = RunDemo;
})(RestParameters || (RestParameters = {}));
//# sourceMappingURL=Example.js.map