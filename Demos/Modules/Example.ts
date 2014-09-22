module RpnCalculator {
  interface BinaryOperator<T> {
    (x: T, y: T): T
  }

  var add: BinaryOperator<number> = (x, y) => x + y;
  var subtract: BinaryOperator<number> = (x, y) => x - y;
  var multiply: BinaryOperator<number> = (x, y) => x * y;
  var divide: BinaryOperator<number> = (x, y) => x / y;

  function applyOperator(items: number[], op : BinaryOperator<number>) {
    var y = items.shift();
    var x = items.shift();

    items.unshift(op(x, y));

    return items;
  }

  function solveInternal(stack: number[], value: string) {
    var apply = (op: BinaryOperator<number>) => applyOperator(stack, op);

    if (value === "+") return apply(add);
    if (value === "-") return apply(subtract);
    if (value === "*") return apply(multiply);
    if (value === "/") return apply(divide);

    stack.unshift(parseFloat(value));

    return stack;
  }

  export function solve(expr: string) {
    return expr.split(" ").reduce(solveInternal, []);
  }
}

module ModuleDemo {
  export function RunDemo() {

    return [
        "4 2 5 * + 1 3 2 * + /",
        "5 4 6 + /",
        "10 4 3 + 2 * -",
        "2 3 +",
        "90 34 12 33 55 66 + * - + -",
        "90 3 -"
      ].map(
        e => ({ expression: e, result: RpnCalculator.solve(e) })
      ).reduce(
        (p, c) => p + c.expression + " = " + c.result.toString() + "<br />", "");
  }
}