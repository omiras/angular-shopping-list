import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [

  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingList: ShoppingService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // get a copy of the array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingList.addIngredients(ingredients);
  }
}
