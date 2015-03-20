var TemplateStrings;
(function (TemplateStrings) {
    var theAnswer = 42;
    function RunDemo() {
        return "The answer to the ultimate question of life, the universe, and everything is " + theAnswer + ".";
    }
    TemplateStrings.RunDemo = RunDemo;
})(TemplateStrings || (TemplateStrings = {}));
