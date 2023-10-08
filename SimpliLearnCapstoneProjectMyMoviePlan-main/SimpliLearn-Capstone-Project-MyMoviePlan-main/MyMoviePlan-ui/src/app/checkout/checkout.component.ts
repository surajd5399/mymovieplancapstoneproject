import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/model/cart';
import { cartitem } from 'src/model/cartitem';
import { CartService } from 'src/service/cart.service';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart:Cart = new Cart();
  cardnumber:number;
  cvv:number;
  cardname:string;
  constructor(
    private cartservice:CartService, 
    private router:Router, 
    private loginservice:LoginService,
    private location:Location){}
  ngOnInit(){
    if(this.loginservice.userauthstatus){

    }else{
      alert('Please login as a user to continue!!');
      this.location.back();
    }
    this.cart = this.cartservice.getCart();
  }
  removefromcart(itm:cartitem){
    this.cartservice.removeFromCart(itm.movie.movieId);
  }
  pay(){
    const response = confirm("Confirm your purchase of "+this.cart.totalprice+ " INR for the movie tickets ?");
    if(response){
      alert("Payment Successful");
      this.router.navigateByUrl("bookingdetails")
    }else{
      alert("Payment Aborted");
    }

  }
}
