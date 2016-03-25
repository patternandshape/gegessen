import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Meals</option>
      <option value="lowCalories">Healthy</option>
      <option value="highCalories">Less Healthy</option>
    </select>
    <food-display *ngFor="#currentFood of foodList | calories:filterDone"
    (click)="foodClicked(currentFood)"
    [food]="currentFood">
    </food-display>
    <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
    </edit-food-details>
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter < Food > ;
  public selectedFood: Food;
  public filterDone: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
    console.log(this.selectedFood);
  }
  createFood(createdFood: Food): void {
    this.foodList.push(createdFood)
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
