module DefaultParameters {
  function formatName(first: string, last: string, middle = "") {
    return last + ", " + first + (middle !== "" ? " " + middle : "");
  }

  export function RunDemo() {
    return formatName("John", "Public") + "<br />" + formatName("John", "Public", "Q");
  }
}