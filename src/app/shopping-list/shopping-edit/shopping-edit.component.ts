import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private slService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddIngredient($event): void {
    $event.preventDefault();
    this.slService.addIngredient(new Ingredient(this.name.nativeElement.value, +this.amount.nativeElement.value));
  }

}
