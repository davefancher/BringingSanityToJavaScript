/// <reference path="Demos/ArrowFunctionExpressions/Example.ts" />
/// <reference path="Demos/DefaultParameters/Example.ts" />
/// <reference path="Demos/OptionalParameters/Example.ts" />
/// <reference path="Demos/FunctionOverloading/Example.ts" />
/// <reference path="Demos/StandardEnumerations/Example.ts" />
/// <reference path="Demos/ComputedMemberEnums/Example.ts" />
/// <reference path="Demos/Classes/Example.ts" />
/// <reference path="Demos/Accessors/Example.ts" />
/// <reference path="Demos/ParameterProperties/Example.ts" />
/// <reference path="Demos/Interfaces/Example.ts" />
/// <reference path="Demos/TypeCompatibility/Example.ts" />
/// <reference path="Demos/FunctionInterfaces/Example.ts" />

var DemoType;
(function (DemoType) {
    DemoType[DemoType["ArrowFunctionExpressions"] = 0] = "ArrowFunctionExpressions";
    DemoType[DemoType["DefaultParameters"] = 1] = "DefaultParameters";
    DemoType[DemoType["OptionalParameters"] = 2] = "OptionalParameters";
    DemoType[DemoType["FunctionOverloading"] = 3] = "FunctionOverloading";
    DemoType[DemoType["StandardEnumerations"] = 4] = "StandardEnumerations";
    DemoType[DemoType["ComputedMemberEnums"] = 5] = "ComputedMemberEnums";
    DemoType[DemoType["Classes"] = 6] = "Classes";
    DemoType[DemoType["Accessors"] = 7] = "Accessors";
    DemoType[DemoType["ParameterProperties"] = 8] = "ParameterProperties";
    DemoType[DemoType["Interfaces"] = 9] = "Interfaces";
    DemoType[DemoType["TypeCompatibility"] = 10] = "TypeCompatibility";
    DemoType[DemoType["FunctionInterfaces"] = 11] = "FunctionInterfaces";
})(DemoType || (DemoType = {}));

var demoMapping = {};
demoMapping[0 /* ArrowFunctionExpressions */] = ArrowFunctionExpressions.RunDemo;
demoMapping[1 /* DefaultParameters */] = DefaultParameters.RunDemo;
demoMapping[2 /* OptionalParameters */] = OptionalParameters.RunDemo;
demoMapping[3 /* FunctionOverloading */] = FunctionOverloading.RunDemo;
demoMapping[4 /* StandardEnumerations */] = StandardEnumerations.RunDemo;
demoMapping[5 /* ComputedMemberEnums */] = ComputedMemberEnums.RunDemo;
demoMapping[6 /* Classes */] = Classes.RunDemo;
demoMapping[7 /* Accessors */] = Accessors.RunDemo;
demoMapping[8 /* ParameterProperties */] = ParameterProperties.RunDemo;
demoMapping[9 /* Interfaces */] = Interfaces.RunDemo;
demoMapping[10 /* TypeCompatibility */] = TypeCompatibility.RunDemo;
demoMapping[11 /* FunctionInterfaces */] = FunctionInterfaces.RunDemo;

function getDemo(demo) {
    if (demoMapping.hasOwnProperty(demo))
        return demoMapping[demo];

    throw "Unknown option";
}

//#endregion
var escape = function (text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
var wrapJS = function (content) {
    return "<pre>" + content + "</pre>";
};
var formatScriptClean = function (text) {
    return wrapJS(escape(text));
};
var formatScript = function (text) {
    return wrapJS(text);
};
var requests = [
    { fileName: "Description.html", target: "descriptionView", formatter: function (xhr) {
            return xhr;
        } },
    { fileName: "Example.ts", target: "typeScriptSourceView", formatter: formatScriptClean },
    { fileName: "Example.js", target: "javaScriptSourceView", formatter: formatScriptClean }];

var makeHttpRequest = function (uri, target, format) {
    $.ajax({
        url: uri,
        success: function (xhr) {
            return target.html(format(xhr));
        },
        error: function (xhr) {
            return target.html(xhr);
        }
    });
};

var runDemo = function (type) {
    $("#viewTabs a[href=#description]").tab("show");

    var demoName = DemoType[type];

    requests.forEach(function (r) {
        return makeHttpRequest("Demos/" + demoName + "/" + r.fileName, $("#" + r.target), r.formatter);
    });

    $("#outputView").html(formatScript(getDemo(type)()));
};

var attachClickHandler = function (buttonId, demoType) {
    var button = $("#" + buttonId);
    button.click(function (e) {
        e.preventDefault();
        $("#currentExampleName").text($(e.target).text());
        runDemo(demoType);
    });
};

window.onload = function () {
    attachClickHandler("arrowFunctionExpressionsButton", 0 /* ArrowFunctionExpressions */);
    attachClickHandler("defaultParametersButton", 1 /* DefaultParameters */);
    attachClickHandler("optionalParametersButton", 2 /* OptionalParameters */);
    attachClickHandler("functionOverloadingButton", 3 /* FunctionOverloading */);
    attachClickHandler("standardEnumsButton", 4 /* StandardEnumerations */);
    attachClickHandler("computedMemberEnumsButton", 5 /* ComputedMemberEnums */);
    attachClickHandler("classesButton", 6 /* Classes */);
    attachClickHandler("accessorsButton", 7 /* Accessors */);
    attachClickHandler("parameterPropertiesButton", 8 /* ParameterProperties */);
    attachClickHandler("interfacesButton", 9 /* Interfaces */);
    attachClickHandler("typeCompatibilityButton", 10 /* TypeCompatibility */);
    attachClickHandler("functionInterfacesButton", 11 /* FunctionInterfaces */);
};
//# sourceMappingURL=app.js.map
