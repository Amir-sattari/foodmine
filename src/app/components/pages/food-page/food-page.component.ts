import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {
  food!: Food;

  constructor (route: ActivatedRoute, foodService: FoodService)
  {
    route.params.subscribe((params) => {
      if(params.id)
        this.food = foodService.getFoodById(params.id);
    })
  }
}
