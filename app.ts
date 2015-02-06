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

// #region Demo Setup

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
  Inheritance,
  Interfaces,
  TypeCompatibility,
  FunctionInterfaces,
  AmbientDeclarations,
  Modules
}

// #endregion

interface ISanityControllerScope extends ng.IScope {
  title: string;
  demoDescription: string;
  demoTsSource: string;
  demoJsSource: string;
  demoOutput: string;
}

class Demo {
  constructor(
    public title,
    public description,
    public typeScriptSource,
    public javaScriptSource,
    public output) {
  }
}

class DemoService {
  private static makeRequest($http: ng.IHttpService, type: DemoType, fileName: string) {
    var demoName = DemoType[type];

    return $http.get("Demos/" + demoName + "/" + fileName);
  }

  private _demoMapping: any;

  constructor(
    private $q: ng.IQService,
    private $http: ng.IHttpService) {
    var demoMapping = {};
    demoMapping[DemoType.ArrowFunctionExpressions] = ArrowFunctionExpressions;
    demoMapping[DemoType.DefaultParameters] = DefaultParameters;
    demoMapping[DemoType.OptionalParameters] = OptionalParameters;
    demoMapping[DemoType.RestParameters] = RestParameters;
    demoMapping[DemoType.FunctionOverloading] = FunctionOverloading;
    demoMapping[DemoType.StandardEnumerations] = StandardEnumerations;
    demoMapping[DemoType.ComputedMemberEnums] = ComputedMemberEnums;
    demoMapping[DemoType.Classes] = Classes;
    demoMapping[DemoType.Accessors] = Accessors;
    demoMapping[DemoType.ParameterProperties] = ParameterProperties;
    demoMapping[DemoType.Inheritance] = Inheritance;
    demoMapping[DemoType.Interfaces] = Interfaces;
    demoMapping[DemoType.TypeCompatibility] = TypeCompatibility;
    demoMapping[DemoType.FunctionInterfaces] = FunctionInterfaces;
    demoMapping[DemoType.AmbientDeclarations] = AmbientDeclarations;
    demoMapping[DemoType.Modules] = ModuleDemo;

    this._demoMapping = demoMapping;
  }

  public RunDemo(demo: DemoType) {
    var deferred = this.$q.defer();

    if (this._demoMapping.hasOwnProperty(demo)) {
      try {
        var result = this._demoMapping[demo].RunDemo();
        deferred.resolve(result);
      } catch (ex) {
        deferred.reject(ex);
      }
    } else {
      deferred.reject("Unknown demo type");
    }

    return deferred.promise;
  }

  public GetDemoDescription(type: DemoType) {
    return DemoService.makeRequest(this.$http, type, "Description.html");
  }

  public GetDemoTypeScriptSource(type: DemoType) {
    return DemoService.makeRequest(this.$http, type, "Example.ts");
  }

  public GetDemoJavaScriptSource(type: DemoType) {
    return DemoService.makeRequest(this.$http, type, "Example.js");
  }
}

class DemoViewer implements ng.IDirective {
  public restrict: string;
  public templateUrl: any;
  public scope : any;
  public link: ng.IDirectiveLinkFn;

  private _link = function (scope, elem, attrs) {
  };

  constructor() {
    this.restrict = "A";
    this.templateUrl = "Content/DemoViewTemplate.html";
    this.scope = { selectedDemo: "=demoViewer" };
    this.link = <ng.IDirectiveLinkFn>angular.bind(this, this._link);
  }
}

class SanityController {
  private static escape(text: string) { return text.replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  private static wrapText(content: string) { return "<pre>" + content + "</pre>"; }
  private static wrapTS(content: string) { return "<pre class=\"brush: ts\" >" + SanityController.escape(content) + "</pre>"; }
  private static wrapJS(content: string) { return "<pre class=\"brush: js\" >" + SanityController.escape(content) + "</pre>"; }

  selectedDemo: Demo;

  constructor(
    private $q: ng.IQService,
    private demoService: DemoService) {
    this.selectedDemo =
      new Demo(
        "Bringing Sanity to JavaScript",
        "<p>Select an example to display the description here</p>",
        "<p>Select an example to display the TypeScript Source here</p>",
        "<p>Select an example to display the JavaScript Source here</p>",
        "");
  }

  public handleClick(e, demoName: string) {
    var self = this;
    angular.element("#viewTabs a[href=#description]").tab("show");

    var demo = DemoType[demoName];

    var promises = [
      this.demoService.GetDemoDescription(demo),
      this.demoService.GetDemoTypeScriptSource(demo),
      this.demoService.GetDemoJavaScriptSource(demo),
      this.demoService.RunDemo(demo)
    ];

    this.$q.all(promises).then(
      v => {
        self.selectedDemo =
          new Demo(
            e.target.innerText,
            v[0].data.toString(),
            SanityController.wrapTS(v[1].data.toString()),
            SanityController.wrapJS(v[2].data.toString()),
            SanityController.wrapText(v[3].toString())
          );

        // Delay to allow the $digest loop time to update each of the bindings
        // before applying the syntax highlighting
        setTimeout(() => angular.element("pre").each(e => SyntaxHighlighter.highlight(null, e)), 100);
      }
    )
  }
}

var sanityApp = angular.module("SanityApp", ["ngSanitize"]);
sanityApp
  .service("demoService", ["$q", "$http", DemoService])
  .directive("demoViewer", [() => new DemoViewer()])
  .controller("SanityController", ["$q", "demoService", SanityController]);