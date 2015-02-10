module UnionTypes {
  function GetSum(numbers: number | number[]) {
    if (typeof numbers === "number") {
      return numbers;
    } else {
      return numbers.reduce((sum, value) => sum + value, 0);
    }
  }

  export function RunDemo() {
    return `Single Number: ${GetSum(10) }<br />Multiple Numbers: ${GetSum([1, 2, 3, 5, 8])}`;
  }
} 