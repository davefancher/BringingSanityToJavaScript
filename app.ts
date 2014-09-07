/// <reference path="Demos/ArrowFunctionExpressions.ts" />
/// <reference path="Demos/DefaultParameters.ts" />
/// <reference path="Demos/OptionalParameters.ts" />
/// <reference path="Demos/FunctionOverloading.ts" />
/// <reference path="Demos/StandardEnumerations.ts" />
/// <reference path="Demos/ComputedMemberEnums.ts" />
/// <reference path="Demos/Classes.ts" />
/// <reference path="Demos/Accessors.ts" />
/// <reference path="Demos/ParameterProperties.ts" />
/// <reference path="Demos/Interfaces.ts" />
/// <reference path="Demos/TypeCompatibility.ts" />
/// <reference path="Demos/FunctionInterfaces.ts" />

//#region Demo Setup

declare var $;

interface Action<TOut> {
  (): TOut;
}

enum DemoType {
  ArrowFunctionExpressions,
  DefaultParameters,
  OptionalParameters,
  FunctionOverloading,
  StandardEnumerations,
  ComputedMemberEnums,
  Classes,
  Accessors,
  ParameterProperties,
  Interfaces,
  TypeCompatibility,
  FunctionInterfaces
}

var demoMapping = {};
demoMapping[DemoType.ArrowFunctionExpressions] = ArrowFunctionExpressions.RunDemo;
demoMapping[DemoType.DefaultParameters] = DefaultParameters.RunDemo;
demoMapping[DemoType.OptionalParameters] = OptionalParameters.RunDemo;
demoMapping[DemoType.FunctionOverloading] = FunctionOverloading.RunDemo;
demoMapping[DemoType.StandardEnumerations] = StandardEnumerations.RunDemo;
demoMapping[DemoType.ComputedMemberEnums] = ComputedMemberEnums.RunDemo;
demoMapping[DemoType.Classes] = Classes.RunDemo;
demoMapping[DemoType.Accessors] = Accessors.RunDemo;
demoMapping[DemoType.ParameterProperties] = ParameterProperties.RunDemo;
demoMapping[DemoType.Interfaces] = Interfaces.RunDemo;
demoMapping[DemoType.TypeCompatibility] = TypeCompatibility.RunDemo;
demoMapping[DemoType.FunctionInterfaces] = FunctionInterfaces.RunDemo;

function getDemo(demo): Action<string> {
  if (demoMapping.hasOwnProperty(demo)) return demoMapping[demo]

  throw "Unknown option";
}

//#endregion
var escape = (text: string) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
var wrapJS = content => "<pre>" + content + "</pre>"
var formatScriptClean = text => wrapJS(escape(text));
var formatScript = text => wrapJS(text);
var requests = [
    { extension: "html", target: "descriptionView", formatter: xhr => xhr },
    { extension: "ts", target: "typeScriptSourceView", formatter: formatScriptClean },
    { extension: "js", target: "javaScriptSourceView", formatter: formatScriptClean } ];

var makeHttpRequest = (uri, target, format) => {
  $.ajax({
    url: uri,
    success: xhr => target.html(format(xhr)),
    error: xhr => target.html(xhr)
  });
};

var runDemo = (type: DemoType) => {
  $("#viewTabs a[href=#description]").tab("show");

  var baseFileName = DemoType[type];

  requests.forEach(r => makeHttpRequest("Demos/" + baseFileName + "." + r.extension, $("#" + r.target), r.formatter));

  $("#outputView").html(formatScript(getDemo(type)()));
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
  attachClickHandler("functionOverloadingButton", DemoType.FunctionOverloading);
  attachClickHandler("standardEnumsButton", DemoType.StandardEnumerations);
  attachClickHandler("computedMemberEnumsButton", DemoType.ComputedMemberEnums);
  attachClickHandler("classesButton", DemoType.Classes);
  attachClickHandler("accessorsButton", DemoType.Accessors);
  attachClickHandler("parameterPropertiesButton", DemoType.ParameterProperties);
  attachClickHandler("interfacesButton", DemoType.Interfaces);
  attachClickHandler("typeCompatibilityButton", DemoType.TypeCompatibility);
  attachClickHandler("functionInterfacesButton", DemoType.FunctionInterfaces);
};