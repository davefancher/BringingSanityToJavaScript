var RestParameters;
(function (RestParameters) {
    function detokenizeString(format) {
        var values = [];
        for (var _i = 0; _i < (arguments.length - 1); _i++) {
            values[_i] = arguments[_i + 1];
        }
        return values.reduce(function (state, current, ix) {
            return state.replace("{" + ix.toString() + "}", current);
        }, format);
    }

    function RunDemo() {
        return detokenizeString("Hello, {0}! Today is {1}", "Dave", new Date().toLocaleDateString());
    }
    RestParameters.RunDemo = RunDemo;
})(RestParameters || (RestParameters = {}));
//# sourceMappingURL=Example.js.map
