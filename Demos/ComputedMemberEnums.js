var ComputedMemberEnums;
(function (ComputedMemberEnums) {
    var getArea = function (r) {
        return Math.PI * Math.pow(r, 2);
    };

    var Circles;
    (function (Circles) {
        Circles[Circles["Small"] = getArea(1)] = "Small";
        Circles[Circles["Medium"] = getArea(5)] = "Medium";
        Circles[Circles["Large"] = getArea(10)] = "Large";
    })(Circles || (Circles = {}));

    function classifyCircle(r) {
        var area = getArea(r);

        if (area <= Circles.Small)
            return area.toString() + " is a small circle";
        if (area <= Circles.Medium)
            return area.toString() + " is a medium circle";
        if (area <= Circles.Large)
            return area.toString() + " is a large circle";

        return area.toString() + " is a gigantic circle";
    }

    function RunDemo() {
        return [0.5, 3, 7, 15].reduce(function (state, current, ix, source) {
            return state += classifyCircle(current) + "<br />";
        }, "").toString();
    }
    ComputedMemberEnums.RunDemo = RunDemo;
})(ComputedMemberEnums || (ComputedMemberEnums = {}));
//# sourceMappingURL=ComputedMemberEnums.js.map
