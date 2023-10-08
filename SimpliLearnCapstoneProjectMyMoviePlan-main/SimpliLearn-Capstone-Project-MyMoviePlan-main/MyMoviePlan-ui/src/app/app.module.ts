import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { MovielistComponent } from './movielist/movielist.component';
import { CartComponent } from './cart/cart.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MoviemasterComponent } from './moviemaster/moviemaster.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewuserbookingsComponent } from './viewuserbookings/viewuserbookings.component';
import { ChangeuserpasswordComponent } from './changeuserpassword/changeuserpassword.component';
import { BookingsmasterComponent } from './bookingsmaster/bookingsmaster.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserlistComponent,
    DetailsComponent,
    SignupComponent,
    UpdateuserComponent,
    MovielistComponent,
    CartComponent,
    AddmovieComponent,
    CheckoutComponent,
    BookingdetailsComponent,
    AdminloginComponent,
    AdminpanelComponent,
    ForbiddenComponent,
    MoviemasterComponent,
    UserloginComponent,
    UserdashboardComponent,
    NavbarComponent,
    ViewuserbookingsComponent,
    ChangeuserpasswordComponent,
    BookingsmasterComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
