var AmbientDeclarations;
(function (AmbientDeclarations) {
    function RunDemo() {
        var tabs = $("#viewTabs > li");
        var exampleName = $("#currentExampleName");
        return "Example Name: " + exampleName.html() + "<br />Tab Count: " + tabs.length;
    }
    AmbientDeclarations.RunDemo = RunDemo;
})(AmbientDeclarations || (AmbientDeclarations = {}));
//# sourceMappingURL=Example.js.map