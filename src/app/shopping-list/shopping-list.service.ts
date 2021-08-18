// manage our shopping list
// list of ingredientes

// addIngredient


import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Eggs', 10)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  public getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    console.log('Ingredients changed')
    this.ingredientsChanged.emit(this.ingredients.slice()); // we inform other components about the change
  }

  public addIngredients(ingredients: Ingredient[]): void {
    this.ingredients = [...ingredients];
    this.ingredientsChanged.emit(this.ingredients.slice()); // we inform other components about the change
  }
}
