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
/// <reference path="Demos/Inheritance/Example.ts" />
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
    DemoType[DemoType["Inheritance"] = 10] = "Inheritance";
    DemoType[DemoType["Interfaces"] = 11] = "Interfaces";
    DemoType[DemoType["TypeCompatibility"] = 12] = "TypeCompatibility";
    DemoType[DemoType["FunctionInterfaces"] = 13] = "FunctionInterfaces";
    DemoType[DemoType["AmbientDeclarations"] = 14] = "AmbientDeclarations";
    DemoType[DemoType["Modules"] = 15] = "Modules";
})(DemoType || (DemoType = {}));


var DemoService = (function () {
    function DemoService($q, $http) {
        this.$q = $q;
        this.$http = $http;
        var demoMapping = {};
        demoMapping[0 /* ArrowFunctionExpressions */] = ArrowFunctionExpressions;
        demoMapping[1 /* DefaultParameters */] = DefaultParameters;
        demoMapping[2 /* OptionalParameters */] = OptionalParameters;
        demoMapping[3 /* RestParameters */] = RestParameters;
        demoMapping[4 /* FunctionOverloading */] = FunctionOverloading;
        demoMapping[5 /* StandardEnumerations */] = StandardEnumerations;
        demoMapping[6 /* ComputedMemberEnums */] = ComputedMemberEnums;
        demoMapping[7 /* Classes */] = Classes;
        demoMapping[8 /* Accessors */] = Accessors;
        demoMapping[9 /* ParameterProperties */] = ParameterProperties;
        demoMapping[10 /* Inheritance */] = Inheritance;
        demoMapping[11 /* Interfaces */] = Interfaces;
        demoMapping[12 /* TypeCompatibility */] = TypeCompatibility;
        demoMapping[13 /* FunctionInterfaces */] = FunctionInterfaces;
        demoMapping[14 /* AmbientDeclarations */] = AmbientDeclarations;
        demoMapping[15 /* Modules */] = ModuleDemo;

        this._demoMapping = demoMapping;
    }
    DemoService.makeRequest = function ($http, type, fileName) {
        var demoName = DemoType[type];

        return $http.get("Demos/" + demoName + "/" + fileName);
    };

    DemoService.prototype.RunDemo = function (demo) {
        var deferred = this.$q.defer();

        if (this._demoMapping.hasOwnProperty(demo)) {
            try  {
                var result = this._demoMapping[demo].RunDemo();
                deferred.resolve(result);
            } catch (ex) {
                deferred.reject(ex);
            }
        } else {
            deferred.reject("Unknown demo type");
        }

        return deferred.promise;
    };

    DemoService.prototype.GetDemoDescription = function (type) {
        return DemoService.makeRequest(this.$http, type, "Description.html");
    };

    DemoService.prototype.GetDemoTypeScriptSource = function (type) {
        return DemoService.makeRequest(this.$http, type, "Example.ts");
    };

    DemoService.prototype.GetDemoJavaScriptSource = function (type) {
        return DemoService.makeRequest(this.$http, type, "Example.js");
    };
    return DemoService;
})();

var SanityController = (function () {
    function SanityController($scope, $q, demoService) {
        this.$scope = $scope;
        this.$q = $q;
        this.demoService = demoService;
        $scope.title = "Bringing Sanity to JavaScript";
        $scope.demoDescription = "<p>Select an example to display the description here</p>";
        $scope.demoTsSource = "<p>Select an example to display the TypeScript Source here</p>";
        $scope.demoJsSource = "<p>Select an example to display the JavaScript Source here</p>";
        $scope.demoOutput = "<p>Select an example to dislay the Output here</p>";
    }
    SanityController.escape = function (text) {
        return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    SanityController.wrapText = function (content) {
        return "<pre>" + content + "</pre>";
    };
    SanityController.wrapTS = function (content) {
        return "<pre class=\"brush: ts\" >" + SanityController.escape(content) + "</pre>";
    };
    SanityController.wrapJS = function (content) {
        return "<pre class=\"brush: js\" >" + SanityController.escape(content) + "</pre>";
    };

    SanityController.prototype.handleClick = function (e, demoName) {
        var _this = this;
        this.$scope.title = e.target.innerText;
        angular.element("#viewTabs a[href=#description]").tab("show");

        var demo = DemoType[demoName];

        var promises = [
            this.demoService.GetDemoDescription(demo).then(function (r) {
                return _this.$scope.demoDescription = r.data.toString();
            }),
            this.demoService.GetDemoTypeScriptSource(demo).then(function (r) {
                return _this.$scope.demoTsSource = SanityController.wrapTS(r.data.toString());
            }),
            this.demoService.GetDemoJavaScriptSource(demo).then(function (r) {
                return _this.$scope.demoJsSource = SanityController.wrapJS(r.data.toString());
            }),
            this.demoService.RunDemo(demo).then(function (r) {
                return _this.$scope.demoOutput = SanityController.wrapText(r.toString());
            })
        ];

        this.$q.all(promises).then(function (v) {
            return setTimeout(function () {
                return angular.element("pre").each(function (e) {
                    return SyntaxHighlighter.highlight(null, e);
                });
            }, 100);
        });
    };
    return SanityController;
})();

var sanityApp = angular.module("SanityApp", ["ngSanitize"]);
sanityApp.service("demoService", ["$q", "$http", DemoService]);
sanityApp.controller("SanityController", ["$scope", "$q", "demoService", SanityController]);
//# sourceMappingURL=app.js.map
