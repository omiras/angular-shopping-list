import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [

  ];

  @ViewChild('recipeItemComponent') recipeItemComponent: ElementRef;

  constructor() { 
    this.recipes.push(new Recipe('A Test Recipe', 'Simply a Test', 'https://www.adobe.com/express/create/media_101046379bb5a3c0a3366cc3b0170c9e8244f753d.png'));
    this.recipes.push(new Recipe('A Test Recipe', 'Simply a Test', 'https://www.adobe.com/express/create/media_101046379bb5a3c0a3366cc3b0170c9e8244f753d.png'));
  }

  ngOnInit(): void {
  }

}
