var ArrowFunctionExpressions;
(function (ArrowFunctionExpressions) {
    var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

    function RunDemo() {
        return fibonacci.filter(function (n) {
            return n % 2 === 0;
        }).reduce(function (state, current, ix, source) {
            return state + current.toString() + "<br />";
        }, "").toString();
    }
    ArrowFunctionExpressions.RunDemo = RunDemo;
})(ArrowFunctionExpressions || (ArrowFunctionExpressions = {}));
//# sourceMappingURL=ArrowFunctionExpressions.js.map
