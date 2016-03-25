import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="food-form">
    <h4 class="form-heading">Edit Meal: </h4>
    <input placeholder="Food" [(ngModel)]="food.name" class="input-sm">
    <input placeholder="Calories" [(ngModel)]="food.calories" class="input-sm">
    <input placeholder="Details" [(ngModel)]="food.details" class="input-sm">
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
