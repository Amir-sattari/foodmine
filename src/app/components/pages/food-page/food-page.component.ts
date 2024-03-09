import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    route: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    route.params.subscribe((params) => {
      if (params.id)
        this.food = foodService.getFoodById(params.id);
    })
  }

  addToCart()
  {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
