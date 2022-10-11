import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test', 'https://perfectdailygrind.com/wp-content/uploads/2019/01/unnamed-2-3.jpg')
    , new Recipe('A Test Recipe2', 'This is simply a test', 'https://perfectdailygrind.com/wp-content/uploads/2019/01/unnamed-2-3.jpg')
    , new Recipe('A Test Recipe3', 'This is simply a test', 'https://perfectdailygrind.com/wp-content/uploads/2019/01/unnamed-2-3.jpg')
    , new Recipe('A Test Recipe4', 'This is simply a test', 'https://perfectdailygrind.com/wp-content/uploads/2019/01/unnamed-2-3.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
