module FunctionInterfaces {
  interface Predicate<T> {
    (value: T): boolean;
  }

  function myFilter<T>(source: T[], callback: Predicate<T>) {
    return source.reduce(
      (state: T[], current: T) => {
        if (callback(current)) state[state.length] = current;
        return state;
      }, []);
  }

  export function RunDemo() {
    var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

    return myFilter(fib, n => n % 2 === 0).reduce(
        (state, current) => state + current.toString() + "<br />", ""); 
  }
} 