var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Inheritance;
(function (Inheritance) {
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.identify = function () {
            return "This person's name is " + this.name;
        };
        return Person;
    })();

    var Developer = (function (_super) {
        __extends(Developer, _super);
        function Developer(name) {
            _super.call(this, name);
            this.name = name;
        }
        Developer.prototype.identify = function () {
            return "This employee's name is " + this.name;
        };
        return Developer;
    })(Person);

    function RunDemo() {
        var p1 = new Person("Dave");
        var p2 = new Developer("Dave");

        return p1.identify() + "<br />" + p2.identify();
    }
    Inheritance.RunDemo = RunDemo;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=Example.js.map
