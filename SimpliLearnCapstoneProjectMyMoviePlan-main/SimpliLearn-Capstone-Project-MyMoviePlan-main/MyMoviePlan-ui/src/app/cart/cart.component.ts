import { Component } from '@angular/core';
import { Cart } from 'src/model/cart';
import { cartitem } from 'src/model/cartitem';
import { CartService } from 'src/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:Cart = new Cart();
  constructor(private cartservice:CartService){}
  ngOnInit(){
    this.cart = this.cartservice.getCart();
  }
  removefromcart(itm:cartitem){
    this.cartservice.removeFromCart(itm.movie.movieId);
  }
}
