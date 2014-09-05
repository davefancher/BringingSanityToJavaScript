module FunctionInterfaces {
  interface Predicate<T> {
    (value: T): boolean;
  }

  function safeFilter<T>(source: T[], callback: Predicate<T>) {
    return source.filter(callback);
  }

  export function RunDemo() {
    return safeFilter(
        [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
        n => n % 2 === 0
        ).reduce((state, current, ix, source) => state + current.toString() + "<br />", ""
        ).toString(); 
  }
} 