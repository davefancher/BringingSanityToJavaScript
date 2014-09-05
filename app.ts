/// <reference path="Scripts/ArrowFunctionExpressions.ts" />
/// <reference path="Scripts/OptionalAndDefaultParameters.ts" />
/// <reference path="Scripts/FunctionOverloading.ts" />
/// <reference path="Scripts/StandardEnumerations.ts" />
/// <reference path="Scripts/ComputedMemberEnums.ts" />
/// <reference path="Scripts/Classes.ts" />
/// <reference path="Scripts/Accessors.ts" />
/// <reference path="Scripts/ParameterProperties.ts" />
/// <reference path="Scripts/Interfaces.ts" />
/// <reference path="Scripts/TypeCompatibility.ts" />
/// <reference path="Scripts/FunctionInterfaces.ts" />

//#region Demo Setup

declare var $;

interface Action<TOut> {
  (): TOut;
}

enum DemoType {
  ArrowFunctionExpressions,
  OptionalAndDefaultParameters,
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

function getDemo(demo): Action<string> {
  switch (demo) {
    case DemoType.ArrowFunctionExpressions:
      return ArrowFunctionExpressions.RunDemo;

    case DemoType.OptionalAndDefaultParameters:
      return OptionalAndDefaultParameters.RunDemo;

    case DemoType.FunctionOverloading:
      return FunctionOverloading.RunDemo;

    case DemoType.StandardEnumerations:
      return StandardEnumerations.RunDemo;

    case DemoType.ComputedMemberEnums:
      return ComputedMemberEnums.RunDemo;

    case DemoType.Classes:
      return Classes.RunDemo;

    case DemoType.Accessors:
      return Accessors.RunDemo;

    case DemoType.ParameterProperties:
      return ParameterProperties.RunDemo;

    case DemoType.Interfaces:
      return Interfaces.RunDemo;

    case DemoType.TypeCompatibility:
      return TypeCompatibility.RunDemo;

    case DemoType.FunctionInterfaces:
      return FunctionInterfaces.RunDemo;
  }

  throw "Unknown option";
}

//#endregion
var escape = (text: string) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
var wrapJS = content => "<pre>" + content + "</pre>"
var formatScriptClean = text => wrapJS(escape(text));
var formatScript = text => wrapJS(text);

var makeHttpRequest = (uri, target) => {
  $.ajax({
    url: uri,
    success: xhr => target.html(formatScriptClean(xhr)),
    error: xhr => target.html(xhr)
  });
};

var runDemo = (type: DemoType) => {
  var demo = getDemo(type);

  $("#viewTabs a[href=#typeScriptSource]").tab("show");

  $("#outputView").html(formatScript(demo()));

  var baseFileName = DemoType[type];

  makeHttpRequest("Scripts/" + baseFileName + ".ts", $("#typeScriptSourceView"));
  makeHttpRequest("Scripts/" + baseFileName + ".js", $("#javaScriptSourceView"));
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
  attachClickHandler("optionalAndDefaultParametersButton", DemoType.OptionalAndDefaultParameters);
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