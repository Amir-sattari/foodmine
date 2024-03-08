import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  foods:Food[] = [];

  constructor(private foodService:FoodService, route: ActivatedRoute)
  {
    route.params.subscribe((params) => {
      if(params.searchTerm)
        this.foods = foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = foodService.getAllFoodsByTag(params.tag);
      else
      this.foods = foodService.getAll();
    })
  }
}
