module FunctionOverloading {
  function formatName(first: string, last: string);
  function formatName(first: string, last: string, middle: string);
  function formatName() {
    var first = arguments[0];
    var last = arguments[1];
    var middle = arguments.length > 2 ? arguments[2] : undefined;
    return first + ", " + last + (middle ? " " + middle : "");
  }

  export function RunDemo() {
    return formatName("John", "Public", "Q") + "<br />" +
           formatName("John", "Public");
  }
} 