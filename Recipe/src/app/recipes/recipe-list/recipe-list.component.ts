import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_1280.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_1280.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_1280.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}