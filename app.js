﻿/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="Scripts/typings/bootstrap/bootstrap.d.ts" />
/// <reference path="Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="Demos/ArrowFunctionExpressions/Example.ts" />
/// <reference path="Demos/DefaultParameters/Example.ts" />
/// <reference path="Demos/OptionalParameters/Example.ts" />
/// <reference path="Demos/RestParameters/Example.ts" />
/// <reference path="Demos/FunctionOverloading/Example.ts" />
/// <reference path="Demos/StandardEnumerations/Example.ts" />
/// <reference path="Demos/ComputedMemberEnums/Example.ts" />
/// <reference path="Demos/Classes/Example.ts" />
/// <reference path="Demos/Accessors/Example.ts" />
/// <reference path="Demos/ParameterProperties/Example.ts" />
/// <reference path="Demos/Interfaces/Example.ts" />
/// <reference path="Demos/TypeCompatibility/Example.ts" />
/// <reference path="Demos/FunctionInterfaces/Example.ts" />
/// <reference path="Demos/AmbientDeclarations/Example.ts" />
/// <reference path="Demos/Modules/Example.ts" />

var DemoType;
(function (DemoType) {
    DemoType[DemoType["ArrowFunctionExpressions"] = 0] = "ArrowFunctionExpressions";
    DemoType[DemoType["DefaultParameters"] = 1] = "DefaultParameters";
    DemoType[DemoType["OptionalParameters"] = 2] = "OptionalParameters";
    DemoType[DemoType["RestParameters"] = 3] = "RestParameters";
    DemoType[DemoType["FunctionOverloading"] = 4] = "FunctionOverloading";
    DemoType[DemoType["StandardEnumerations"] = 5] = "StandardEnumerations";
    DemoType[DemoType["ComputedMemberEnums"] = 6] = "ComputedMemberEnums";
    DemoType[DemoType["Classes"] = 7] = "Classes";
    DemoType[DemoType["Accessors"] = 8] = "Accessors";
    DemoType[DemoType["ParameterProperties"] = 9] = "ParameterProperties";
    DemoType[DemoType["Interfaces"] = 10] = "Interfaces";
    DemoType[DemoType["TypeCompatibility"] = 11] = "TypeCompatibility";
    DemoType[DemoType["FunctionInterfaces"] = 12] = "FunctionInterfaces";
    DemoType[DemoType["AmbientDeclarations"] = 13] = "AmbientDeclarations";
    DemoType[DemoType["Modules"] = 14] = "Modules";
})(DemoType || (DemoType = {}));


var SanityController = (function () {
    function SanityController($scope, $http) {
        var _this = this;
        this.$scope = $scope;
        this.$http = $http;
        this.escape = function (text) {
            return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };
        this.wrapText = function (content) {
            return "<pre>" + content + "</pre>";
        };
        this.wrapTS = function (content) {
            return "<pre class=\"brush: ts\" >" + _this.escape(content) + "</pre>";
        };
        this.wrapJS = function (content) {
            return "<pre class=\"brush: js\" >" + _this.escape(content) + "</pre>";
        };
        this.requests = [
            { fileName: "Description.html", callback: function (result) {
                    return _this.$scope.demoDescription = result.data.toString();
                } },
            { fileName: "Example.ts", callback: function (result) {
                    return _this.$scope.demoTsSource = _this.wrapTS(result.data.toString());
                } },
            { fileName: "Example.js", callback: function (result) {
                    return _this.$scope.demoJsSource = _this.wrapJS(result.data.toString());
                } }];
        this.runDemo = function (type) {
            angular.element("#viewTabs a[href=#description]").tab("show");
            var demoName = DemoType[type];

            _this.requests.forEach(function (r) {
                return _this.$http.get("Demos/" + demoName + "/" + r.fileName).then(r.callback, function (error) {
                    return alert(error);
                });
            });

            _this.$scope.demoOutput = _this.wrapText(_this.getDemo(type));
        };
        $scope.title = "Bringing Sanity to JavaScript";
        $scope.demoDescription = "<p>Select an example to display the description here</p>";
        $scope.demoTsSource = "<p>Select an example to display the TypeScript Source here</p>";
        $scope.demoJsSource = "<p>Select an example to display the JavaScript Source here</p>";
        $scope.demoOutput = "<p>Select an example to display the Output here</p>";

        //TODO: Reconnect syntax highlighter
        //target.children("pre").each(e => SyntaxHighlighter.highlight(null, e));
        var demoMapping = {};
        demoMapping[0 /* ArrowFunctionExpressions */] = ArrowFunctionExpressions.RunDemo;
        demoMapping[1 /* DefaultParameters */] = DefaultParameters.RunDemo;
        demoMapping[2 /* OptionalParameters */] = OptionalParameters.RunDemo;
        demoMapping[3 /* RestParameters */] = RestParameters.RunDemo;
        demoMapping[4 /* FunctionOverloading */] = FunctionOverloading.RunDemo;
        demoMapping[5 /* StandardEnumerations */] = StandardEnumerations.RunDemo;
        demoMapping[6 /* ComputedMemberEnums */] = ComputedMemberEnums.RunDemo;
        demoMapping[7 /* Classes */] = Classes.RunDemo;
        demoMapping[8 /* Accessors */] = Accessors.RunDemo;
        demoMapping[9 /* ParameterProperties */] = ParameterProperties.RunDemo;
        demoMapping[10 /* Interfaces */] = Interfaces.RunDemo;
        demoMapping[11 /* TypeCompatibility */] = TypeCompatibility.RunDemo;
        demoMapping[12 /* FunctionInterfaces */] = FunctionInterfaces.RunDemo;
        demoMapping[13 /* AmbientDeclarations */] = AmbientDeclarations.RunDemo;
        demoMapping[14 /* Modules */] = ModuleDemo.RunDemo;

        this._demoMapping = demoMapping;
    }
    SanityController.prototype.getDemo = function (demo) {
        if (this._demoMapping.hasOwnProperty(demo))
            return this._demoMapping[demo];

        throw "Unknown option";
    };

    SanityController.prototype.handleClick = function (e, demo) {
        this.$scope.title = e.target.innerText;
        this.runDemo(DemoType[demo]);
    };
    return SanityController;
})();

var sanityApp = angular.module("SanityApp", ["ngSanitize"]);
sanityApp.controller("SanityController", ["$scope", "$http", SanityController]);
//# sourceMappingURL=app.js.map
