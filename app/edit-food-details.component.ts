import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="food-form">
    <h4>Food: </h4>
    <input [(ngModel)]="food.name" class="input-sm food-name-form"/>
    <h4>Calories: </h4>
    <input [(ngModel)]="food.calories" class="input-sm food-name-form"/>
    <h4>Details: </h4>
    <input [(ngModel)]="food.details" class="input-sm food-name-form"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
