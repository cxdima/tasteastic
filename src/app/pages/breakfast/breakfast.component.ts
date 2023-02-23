import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../components/recipe-card/recipe';
import { productsList } from '../home/home.component';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent implements OnInit {
  breakfastProducts?: Array<Recipe>;

  ngOnInit() {
    this.breakfastProducts = productsList.filter((recipe) => {
      return recipe.breakfast;
    });
  }
}
