module ArrowFunctionExpressions {
  var fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

  export function RunDemo() {
    return fibonacci
      .filter(n => n % 2 === 0)
      .reduce((state, current) => state + current.toString() + "<br />", "")
      .toString(); 
  }
} 