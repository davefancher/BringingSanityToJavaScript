module OptionalParameters {
  function formatName(first: string, last: string, middle?: string) {
    return last + ", " + first + (middle ? " " + middle : "");
  }

  export function RunDemo() {
    return formatName("John", "Public") + "<br />" +
           formatName("John", "Public", "Q");
  }
}