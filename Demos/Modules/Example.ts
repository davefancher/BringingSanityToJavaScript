module RpnCalculator {
  function apply(items: number[], fn : (x: number, y: number) => number) {
    var y = items.shift();
    var x = items.shift();

    items.unshift(fn(x, y));

    return items;
  }

  function solveInternal(items: number[], value: string) {
    if (value === "+") return apply(items, (x, y) => x + y);
    if (value === "-") return apply(items, (x, y) => x - y);
    if (value === "*") return apply(items, (x, y) => x * y);
    if (value === "/") return apply(items, (x, y) => x / y);

    items.unshift(parseFloat(value));

    return items;
  }

  export function solve(expr: string) {
    return expr.split(" ").reduce(solveInternal, []);
  }
}

module ModuleDemo {
  export function RunDemo() {
    var expressions = [
      "4 2 5 * + 1 3 2 * + /",
      "5 4 6 + /",
      "10 4 3 + 2 * -",
      "2 3 +",
      "90 34 12 33 55 66 + * - + -",
      "90 3 -"];

    return expressions.reduce(
      (p, c) => p + c + " = " + RpnCalculator.solve(c).toString() + "<br />",
      "");
  }
}