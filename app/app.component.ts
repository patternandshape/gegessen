import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class= "container">
      <h1>GEGESSEN</h1>
      <food-list
      [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    <div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Apfelstrudel", 1000, " Grandma sent this via FedEx. Only ate one 'serving'."),
      new Food("Sauerkraut", 27, " Put a bit on top of my vegan bratwurst."),
      new Food("Marzipankartoffeln", 350, " Ate too many of these at the Christmas market. Sehr gut.")
    ];
  }
  foodWasSelected(clickedFood: Food): void {}
}
