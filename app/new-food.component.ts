import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h4>Create Food: </h4>
    <input placeholder="Food" class="input-sm" #newFood>
    <input placeholder="Details" class="input-sm" #newDetails>
    <input placeholder="Calorie Count" class="input-sm" #newCalories>
    <button (click)="addFood(newFood, newDetails, newCalories)" class="create btn-success btn-sm add-button">Add</button>
    // <div *ngIf="food.pints < 10" class="lowFood">
    // <h5>Less than 10 pints remaining!</h5>
    // </div>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter < Food > ;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodDetails: HTMLInputElement, foodCalories: HTMLInputElement) {
    var newFood = new Food(foodName.value, foodDetails.value, parseInt(foodCalories.value));
    this.onSubmitNewFood.emit(newFood);
    console.log(newFood);
    foodName.value = "";
    foodDetails.value = "";
    foodCalories.value = "";
  }
}
