var UnionTypes;
(function (UnionTypes) {
    function GetSum(numbers) {
        if (typeof numbers === "number") {
            return numbers;
        }
        else {
            return numbers.reduce(function (sum, value) { return sum + value; }, 0);
        }
    }
    function RunDemo() {
        return "Single Number: " + GetSum(10) + "<br />Multiple Numbers: " + GetSum([1, 2, 3, 5, 8]);
    }
    UnionTypes.RunDemo = RunDemo;
})(UnionTypes || (UnionTypes = {}));
