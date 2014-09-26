/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
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
define(["require", "exports", "jquery"], function(require, exports, $) {
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

    function getDemo(demo) {
        if (demoMapping.hasOwnProperty(demo))
            return demoMapping[demo];

        throw "Unknown option";
    }

    //#endregion
    var escape = function (text) {
        return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    var wrapText = function (content) {
        return "<pre>" + content + "</pre>";
    };
    var wrapTS = function (content) {
        return "<pre class=\"brush: ts\" >" + escape(content) + "</pre>";
    };
    var wrapJS = function (content) {
        return "<pre class=\"brush: js\" >" + escape(content) + "</pre>";
    };

    //var formatScriptClean = text => wrapJS(escape(text));
    //var formatScript = text => wrapJS(text);
    var requests = [
        { fileName: "Description.html", target: "descriptionView", formatter: function (xhr) {
                return xhr;
            } },
        { fileName: "Example.ts", target: "typeScriptSourceView", formatter: wrapTS },
        { fileName: "Example.js", target: "javaScriptSourceView", formatter: wrapJS }];

    var makeHttpRequest = function (uri, target, format) {
        $.ajax({
            url: uri,
            success: function (xhr) {
                target.html(format(xhr));
                target.children("pre").each(function (e) {
                    return SyntaxHighlighter.highlight(null, e);
                });
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

        $("#outputView").html(wrapText(getDemo(type)()));
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
        attachClickHandler("restParametersButton", 3 /* RestParameters */);
        attachClickHandler("functionOverloadingButton", 4 /* FunctionOverloading */);
        attachClickHandler("standardEnumsButton", 5 /* StandardEnumerations */);
        attachClickHandler("computedMemberEnumsButton", 6 /* ComputedMemberEnums */);
        attachClickHandler("classesButton", 7 /* Classes */);
        attachClickHandler("accessorsButton", 8 /* Accessors */);
        attachClickHandler("parameterPropertiesButton", 9 /* ParameterProperties */);
        attachClickHandler("interfacesButton", 10 /* Interfaces */);
        attachClickHandler("typeCompatibilityButton", 11 /* TypeCompatibility */);
        attachClickHandler("functionInterfacesButton", 12 /* FunctionInterfaces */);
        attachClickHandler("ambientDeclarationsButton", 13 /* AmbientDeclarations */);
        attachClickHandler("modulesButton", 14 /* Modules */);
    };
});
//# sourceMappingURL=app.js.map
