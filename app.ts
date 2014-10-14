/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
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

//#region Demo Setup

declare var SyntaxHighlighter;

interface Action<TOut> {
  (): TOut;
}

enum DemoType {
  ArrowFunctionExpressions,
  DefaultParameters,
  OptionalParameters,
  RestParameters,
  FunctionOverloading,
  StandardEnumerations,
  ComputedMemberEnums,
  Classes,
  Accessors,
  ParameterProperties,
  Interfaces,
  TypeCompatibility,
  FunctionInterfaces,
  AmbientDeclarations,
  Modules
}

//#endregion

interface ISanityControllerScope extends ng.IScope {
  title: string;
  demoDescription: string;
  demoTsSource: string;
  demoJsSource: string;
  demoOutput: string;
}

class SanityController {
  private _demoMapping : any;

  constructor(
    private $scope: ISanityControllerScope,
    private $http: ng.IHttpService) {
    $scope.title = "Bringing Sanity to JavaScript";
    $scope.demoDescription = "<p>Select an example to display the description here</p>";
    $scope.demoTsSource = "<p>Select an example to display the TypeScript Source here</p>";
    $scope.demoJsSource = "<p>Select an example to display the JavaScript Source here</p>";
    $scope.demoOutput = "<p>Select an example to display the Output here</p>";

    //TODO: Reconnect syntax highlighter
    //target.children("pre").each(e => SyntaxHighlighter.highlight(null, e));

    var demoMapping = {};
    demoMapping[DemoType.ArrowFunctionExpressions] = ArrowFunctionExpressions.RunDemo;
    demoMapping[DemoType.DefaultParameters] = DefaultParameters.RunDemo;
    demoMapping[DemoType.OptionalParameters] = OptionalParameters.RunDemo;
    demoMapping[DemoType.RestParameters] = RestParameters.RunDemo;
    demoMapping[DemoType.FunctionOverloading] = FunctionOverloading.RunDemo;
    demoMapping[DemoType.StandardEnumerations] = StandardEnumerations.RunDemo;
    demoMapping[DemoType.ComputedMemberEnums] = ComputedMemberEnums.RunDemo;
    demoMapping[DemoType.Classes] = Classes.RunDemo;
    demoMapping[DemoType.Accessors] = Accessors.RunDemo;
    demoMapping[DemoType.ParameterProperties] = ParameterProperties.RunDemo;
    demoMapping[DemoType.Interfaces] = Interfaces.RunDemo;
    demoMapping[DemoType.TypeCompatibility] = TypeCompatibility.RunDemo;
    demoMapping[DemoType.FunctionInterfaces] = FunctionInterfaces.RunDemo;
    demoMapping[DemoType.AmbientDeclarations] = AmbientDeclarations.RunDemo;
    demoMapping[DemoType.Modules] = ModuleDemo.RunDemo;

    this._demoMapping = demoMapping;
  }

  private escape = (text: string) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  private wrapText = content => "<pre>" + content + "</pre>";
  private wrapTS = content => "<pre class=\"brush: ts\" >" + this.escape(content) + "</pre>";
  private wrapJS = content => "<pre class=\"brush: js\" >" + this.escape(content) + "</pre>";

  private requests = [
    { fileName: "Description.html", callback: result => this.$scope.demoDescription = result.data.toString() },
    { fileName: "Example.ts", callback: result => this.$scope.demoTsSource = this.wrapTS(result.data.toString()) },
    { fileName: "Example.js", callback: result => this.$scope.demoJsSource = this.wrapJS(result.data.toString()) }];

  private getDemo(demo: DemoType): Action<string> {
    if (this._demoMapping.hasOwnProperty(demo)) return this._demoMapping[demo];

    throw "Unknown option";
  }

  private runDemo = (type: DemoType) => {
    angular.element("#viewTabs a[href=#description]").tab("show");
    var demoName = DemoType[type];

    this.requests.forEach(
      r => this.$http.get("Demos/" + demoName + "/" + r.fileName).then(r.callback, error => alert(error))
    );

    this.$scope.demoOutput = this.wrapText(this.getDemo(type));
  };

  public handleClick(e, demo : string) {
    this.$scope.title = e.target.innerText;
    this.runDemo(DemoType[demo]);
  }
}

var sanityApp = angular.module("SanityApp", ["ngSanitize"]);
sanityApp.controller("SanityController", ["$scope", "$http", SanityController]);