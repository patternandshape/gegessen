import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-details-display',
  inputs: ['food'],
  template: `
    <div class = "foodDetails">
      <label>
      <h5>{{ food.calories }} kCal</h5>
      <p>{{ food.details }}</p>
      </label>
    </div>
  `
})
export class FoodDetailsComponent {
  public food: Food;
}
