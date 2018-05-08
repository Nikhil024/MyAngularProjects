import { Ingredient } from '../shared/ingredient.model';
import { OnInit } from '@angular/core';
export class ShoppingListService implements OnInit {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tamatoes', 10),
    new Ingredient('Cucumbers', 15),
  ];
  ngOnInit() {}
  constructor() {}

  getIngredients() {
    return this.ingredients;
  }
  saveIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}