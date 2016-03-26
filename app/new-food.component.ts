import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h4 class="form-heading">Add Meal: </h4>
    <input placeholder="Food" class="input-sm" #newFood>
    <input placeholder="Calories" class="input-sm" #newCalories>
    <input placeholder="Details" class="input-sm" #newDetails>
    <button (click)="addFood(newFood, newCalories, newDetails)" class="create btn-success add-button"><i class="fa fa-cutlery"></i></button>
  </div>
  `
})
export class NewFoodComponent {
  public food: Food;
  public onSubmitNewFood: EventEmitter <Food> ;

  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodCalories: HTMLInputElement, foodDetails: HTMLInputElement) {
    var newFood = new Food(foodName.value, parseInt(foodCalories.value), foodDetails.value);
    this.onSubmitNewFood.emit(newFood);
    foodName.value = "";
    foodCalories.value = "";
    foodDetails.value = "";
  }
}
