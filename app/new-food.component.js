System.register(['angular2/core', './food.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, food_model_1;
    var NewFoodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_model_1_1) {
                food_model_1 = food_model_1_1;
            }],
        execute: function() {
            NewFoodComponent = (function () {
                function NewFoodComponent() {
                    this.onSubmitNewFood = new core_1.EventEmitter();
                }
                NewFoodComponent.prototype.addFood = function (foodName, foodDetails, foodCalories) {
                    var newFood = new food_model_1.Food(foodName.value, foodDetails.value, parseInt(foodCalories.value));
                    this.onSubmitNewFood.emit(newFood);
                    console.log(newFood);
                    foodName.value = "";
                    foodDetails.value = "";
                    foodCalories.value = "";
                };
                NewFoodComponent = __decorate([
                    core_1.Component({
                        selector: 'new-food',
                        outputs: ['onSubmitNewFood'],
                        template: "\n  <div class=\"food-form\">\n    <h4>Create Food: </h4>\n    <input placeholder=\"Food\" class=\"input-sm\" #newFood>\n    <input placeholder=\"Details\" class=\"input-sm\" #newDetails>\n    <input placeholder=\"Calorie Count\" class=\"input-sm\" #newCalories>\n    <button (click)=\"addFood(newFood, newDetails, newCalories)\" class=\"create btn-success btn-sm add-button\">Add</button>\n    // <div *ngIf=\"food.pints < 10\" class=\"lowFood\">\n    // <h5>Less than 10 pints remaining!</h5>\n    // </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewFoodComponent);
                return NewFoodComponent;
            }());
            exports_1("NewFoodComponent", NewFoodComponent);
        }
    }
});
//# sourceMappingURL=new-food.component.js.map