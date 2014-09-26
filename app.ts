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

declare var $;
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

function getDemo(demo): Action<string> {
  if (demoMapping.hasOwnProperty(demo)) return demoMapping[demo]

  throw "Unknown option";
}

//#endregion
var escape = (text: string) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
var wrapText = content => "<pre>" + content + "</pre>";
var wrapTS = content => "<pre class=\"brush: ts\" >" + escape(content) + "</pre>";
var wrapJS = content => "<pre class=\"brush: js\" >" + escape(content) + "</pre>";

//var formatScriptClean = text => wrapJS(escape(text));
//var formatScript = text => wrapJS(text);

var requests = [
    { fileName: "Description.html", target: "descriptionView", formatter: xhr => xhr },
    { fileName: "Example.ts", target: "typeScriptSourceView", formatter: wrapTS },
    { fileName: "Example.js", target: "javaScriptSourceView", formatter: wrapJS } ];

var makeHttpRequest = (uri, target, format) => {
  $.ajax({
    url: uri,
    success: xhr => {
      target.html(format(xhr));
      target.children("pre").each(e => SyntaxHighlighter.highlight(null, e));
    },
    error: xhr => target.html(xhr)
  });
};

var runDemo = (type: DemoType) => {
  $("#viewTabs a[href=#description]").tab("show");

  var demoName = DemoType[type];

  requests.forEach(r => makeHttpRequest("Demos/" + demoName + "/" + r.fileName, $("#" + r.target), r.formatter));

  $("#outputView").html(wrapText(getDemo(type)()));
};


var attachClickHandler = (buttonId, demoType: DemoType) => {
  var button = $("#" + buttonId);
  button.click(e => {
    e.preventDefault();
    $("#currentExampleName").text($(e.target).text());
    runDemo(demoType);
  });
};

window.onload = () => {
  attachClickHandler("arrowFunctionExpressionsButton", DemoType.ArrowFunctionExpressions);
  attachClickHandler("defaultParametersButton", DemoType.DefaultParameters);
  attachClickHandler("optionalParametersButton", DemoType.OptionalParameters);
  attachClickHandler("restParametersButton", DemoType.RestParameters);
  attachClickHandler("functionOverloadingButton", DemoType.FunctionOverloading);
  attachClickHandler("standardEnumsButton", DemoType.StandardEnumerations);
  attachClickHandler("computedMemberEnumsButton", DemoType.ComputedMemberEnums);
  attachClickHandler("classesButton", DemoType.Classes);
  attachClickHandler("accessorsButton", DemoType.Accessors);
  attachClickHandler("parameterPropertiesButton", DemoType.ParameterProperties);
  attachClickHandler("interfacesButton", DemoType.Interfaces);
  attachClickHandler("typeCompatibilityButton", DemoType.TypeCompatibility);
  attachClickHandler("functionInterfacesButton", DemoType.FunctionInterfaces);
  attachClickHandler("ambientDeclarationsButton", DemoType.AmbientDeclarations);
  attachClickHandler("modulesButton", DemoType.Modules);
};