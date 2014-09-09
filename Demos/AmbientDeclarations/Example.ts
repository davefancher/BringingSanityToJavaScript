module AmbientDeclarations {
  // Obtain jquery.TypeScript.DefinitelyTyped from DefinitelyTyped
  // and import to get IntelliSense support
  declare var $;

  export function RunDemo() {
    var tabs = $("#viewTabs > li");
    var exampleName = $("#currentExampleName");

    return "Example Name: " + exampleName.html() +
           "<br />Tab Count: " + tabs.length;
  }
} 