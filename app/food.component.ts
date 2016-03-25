import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
    <button (click)="addMeal()" class="btn-success add-button"> \+ </button>
    <label>
    <h4>{{ food.name }}</h4>
    <h5>{{ food.calories }} kCal</h5>
    <p>{{ food.details }}</p>
    </label>
  </div>
  `
})
export class FoodComponent {
  public food: Food;
  addMeal() {
  }
}
