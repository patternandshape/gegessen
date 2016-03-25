import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class= "container">
      <h1>Gegessen</h1>
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
      new Food("Apfelstrudel", "Grandma sent this via FedEx. Only ate one 'serving'.", 520),
      new Food("Sauerkraut", "Put a bit on top of my vegan bratwurst.", 27),
      new Food("Marzipankartoffeln", "Ate too many of these at the Christmas market. Sehr gut.", 350)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log(clickedFood);
  }
}
