import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
    <button (click)="sellPint()" class="btn-success add-button"> \+ </button>
    <label>{{ food.name }},{{ food.details }}, {{ food.calories }} kCal</label>
  </div>
  `
})
export class FoodComponent {
  public food: Food;
  sellPint() {
    // this.food.pints -= 1;
  }
}
