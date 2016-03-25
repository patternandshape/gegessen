import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div>
      <label>
      <h4>{{ food.name }}</h4>
      </label>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
