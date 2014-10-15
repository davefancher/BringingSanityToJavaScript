var RpnCalculator;
(function (RpnCalculator) {
    var operatorMap = {
        "+": (function (x, y) {
            return x + y;
        }),
        "-": (function (x, y) {
            return x - y;
        }),
        "*": (function (x, y) {
            return x * y;
        }),
        "/": (function (x, y) {
            return x / y;
        })
    };

    function applyOperator(items, op) {
        var y = items.shift();
        var x = items.shift();

        items.unshift(op(x, y));

        return items;
    }

    function solveInternal(stack, value) {
        var apply = function (op) {
            return applyOperator(stack, op);
        };

        if (operatorMap.hasOwnProperty(value)) {
            return apply(operatorMap[value]);
        }

        stack.unshift(parseFloat(value));

        return stack;
    }

    function solve(expr) {
        return expr.split(" ").reduce(solveInternal, []);
    }
    RpnCalculator.solve = solve;
})(RpnCalculator || (RpnCalculator = {}));

var ModuleDemo;
(function (ModuleDemo) {
    function RunDemo() {
        return [
            "4 2 5 * + 1 3 2 * + /",
            "5 4 6 + /",
            "10 4 3 + 2 * -",
            "2 3 +",
            "90 34 12 33 55 66 + * - + -",
            "90 3 -"
        ].map(function (e) {
            return ({ expression: e, result: RpnCalculator.solve(e) });
        }).reduce(function (p, c) {
            return p + c.expression + " = " + c.result.toString() + "<br />";
        }, "");
    }
    ModuleDemo.RunDemo = RunDemo;
})(ModuleDemo || (ModuleDemo = {}));
//# sourceMappingURL=Example.js.map
