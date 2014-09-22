var RpnCalculator;
(function (RpnCalculator) {
    function apply(items, fn) {
        var y = items.shift();
        var x = items.shift();

        items.unshift(fn(x, y));

        return items;
    }

    function solveInternal(items, value) {
        if (value === "+")
            return apply(items, function (x, y) {
                return x + y;
            });
        if (value === "-")
            return apply(items, function (x, y) {
                return x - y;
            });
        if (value === "*")
            return apply(items, function (x, y) {
                return x * y;
            });
        if (value === "/")
            return apply(items, function (x, y) {
                return x / y;
            });

        items.unshift(parseFloat(value));

        return items;
    }

    function solve(expr) {
        return expr.split(" ").reduce(solveInternal, []);
    }
    RpnCalculator.solve = solve;
})(RpnCalculator || (RpnCalculator = {}));

var ModuleDemo;
(function (ModuleDemo) {
    function RunDemo() {
        var expressions = [
            "4 2 5 * + 1 3 2 * + /",
            "5 4 6 + /",
            "10 4 3 + 2 * -",
            "2 3 +",
            "90 34 12 33 55 66 + * - + -",
            "90 3 -"];

        return expressions.reduce(function (p, c) {
            return p + c + " = " + RpnCalculator.solve(c).toString() + "<br />";
        }, "");
    }
    ModuleDemo.RunDemo = RunDemo;
})(ModuleDemo || (ModuleDemo = {}));
//# sourceMappingURL=Example.js.map
