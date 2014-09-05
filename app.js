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

var DemoType;
(function (DemoType) {
    DemoType[DemoType["ArrowFunctionExpressions"] = 0] = "ArrowFunctionExpressions";
    DemoType[DemoType["OptionalAndDefaultParameters"] = 1] = "OptionalAndDefaultParameters";
    DemoType[DemoType["FunctionOverloading"] = 2] = "FunctionOverloading";
    DemoType[DemoType["StandardEnumerations"] = 3] = "StandardEnumerations";
    DemoType[DemoType["ComputedMemberEnums"] = 4] = "ComputedMemberEnums";
    DemoType[DemoType["Classes"] = 5] = "Classes";
    DemoType[DemoType["Accessors"] = 6] = "Accessors";
    DemoType[DemoType["ParameterProperties"] = 7] = "ParameterProperties";
    DemoType[DemoType["Interfaces"] = 8] = "Interfaces";
    DemoType[DemoType["TypeCompatibility"] = 9] = "TypeCompatibility";
    DemoType[DemoType["FunctionInterfaces"] = 10] = "FunctionInterfaces";
})(DemoType || (DemoType = {}));

function getDemo(demo) {
    switch (demo) {
        case 0 /* ArrowFunctionExpressions */:
            return ArrowFunctionExpressions.RunDemo;

        case 1 /* OptionalAndDefaultParameters */:
            return OptionalAndDefaultParameters.RunDemo;

        case 2 /* FunctionOverloading */:
            return FunctionOverloading.RunDemo;

        case 3 /* StandardEnumerations */:
            return StandardEnumerations.RunDemo;

        case 4 /* ComputedMemberEnums */:
            return ComputedMemberEnums.RunDemo;

        case 5 /* Classes */:
            return Classes.RunDemo;

        case 6 /* Accessors */:
            return Accessors.RunDemo;

        case 7 /* ParameterProperties */:
            return ParameterProperties.RunDemo;

        case 8 /* Interfaces */:
            return Interfaces.RunDemo;

        case 9 /* TypeCompatibility */:
            return TypeCompatibility.RunDemo;

        case 10 /* FunctionInterfaces */:
            return FunctionInterfaces.RunDemo;
    }

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

var makeHttpRequest = function (uri, target) {
    $.ajax({
        url: uri,
        success: function (xhr) {
            return target.html(formatScriptClean(xhr));
        },
        error: function (xhr) {
            return target.html(xhr);
        }
    });
};

var runDemo = function (type) {
    var demo = getDemo(type);

    $("#viewTabs a[href=#typeScriptSource]").tab("show");

    $("#outputView").html(formatScript(demo()));

    var baseFileName = DemoType[type];

    makeHttpRequest("Scripts/" + baseFileName + ".ts", $("#typeScriptSourceView"));
    makeHttpRequest("Scripts/" + baseFileName + ".js", $("#javaScriptSourceView"));
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
    attachClickHandler("optionalAndDefaultParametersButton", 1 /* OptionalAndDefaultParameters */);
    attachClickHandler("functionOverloadingButton", 2 /* FunctionOverloading */);
    attachClickHandler("standardEnumsButton", 3 /* StandardEnumerations */);
    attachClickHandler("computedMemberEnumsButton", 4 /* ComputedMemberEnums */);
    attachClickHandler("classesButton", 5 /* Classes */);
    attachClickHandler("accessorsButton", 6 /* Accessors */);
    attachClickHandler("parameterPropertiesButton", 7 /* ParameterProperties */);
    attachClickHandler("interfacesButton", 8 /* Interfaces */);
    attachClickHandler("typeCompatibilityButton", 9 /* TypeCompatibility */);
    attachClickHandler("functionInterfacesButton", 10 /* FunctionInterfaces */);
};
//# sourceMappingURL=app.js.map
