import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { FoodDetailsComponent } from './food-details.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriesPipe],
  directives: [FoodComponent, FoodDetailsComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Meals</option>
      <option value="lowCalories">Healthy</option>
      <option value="highCalories">Less Healthy</option>
    </select>

    <food-display *ngFor="#currentFood of foodList | calories:filterDone"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
    </food-display>

    <food-details-display *ngIf="selectedFood" [food]="selectedFood">
    </food-details-display>

    <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
    </edit-food-details>

    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter <Food> ;
  public selectedFood: Food;
  public filterDone: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
    // console.log(this.selectedFood);
  }
  createFood(createdFood: Food): void {
    this.foodList.push(createdFood);
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
