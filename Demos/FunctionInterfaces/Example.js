var FunctionInterfaces;
(function (FunctionInterfaces) {
    function myFilter(source, callback) {
        return source.reduce(function (state, current) {
            if (callback(current))
                state[state.length] = current;
            return state;
        }, []);
    }
    function RunDemo() {
        var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
        return myFilter(fib, function (n) { return n % 2 === 0; }).reduce(function (state, current) { return state + current.toString() + "<br />"; }, "");
    }
    FunctionInterfaces.RunDemo = RunDemo;
})(FunctionInterfaces || (FunctionInterfaces = {}));
