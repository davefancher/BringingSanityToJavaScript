var FunctionInterfaces;
(function (FunctionInterfaces) {
    function safeFilter(source, callback) {
        return source.filter(callback);
    }

    function RunDemo() {
        return safeFilter([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], function (n) {
            return n % 2 === 0;
        }).reduce(function (state, current, ix, source) {
            return state + current.toString() + "<br />";
        }, "").toString();
    }
    FunctionInterfaces.RunDemo = RunDemo;
})(FunctionInterfaces || (FunctionInterfaces = {}));
//# sourceMappingURL=FunctionInterfaces.js.map
