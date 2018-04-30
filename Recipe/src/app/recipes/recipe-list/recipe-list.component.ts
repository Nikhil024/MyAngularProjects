import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test0 Recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_1280.jpg'),
    new Recipe('A Test1 Recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_1280.jpg'),
    new Recipe('A Test2 Recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_1280.jpg'),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
