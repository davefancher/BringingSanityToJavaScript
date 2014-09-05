module OptionalAndDefaultParameters {
  function formatName(first: string, last: string, middle: string) {
    return last + ", " + first + " " + middle;
  }

  export function RunDemo() {
    return formatName("John", "Public", "Q");
  }
}