System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Food;
    return {
        setters:[],
        execute: function() {
            Food = (function () {
                function Food(name, details, calories) {
                    this.name = name;
                    this.details = details;
                    this.calories = calories;
                }
                return Food;
            }());
            exports_1("Food", Food);
        }
    }
});
//# sourceMappingURL=food.model.js.map