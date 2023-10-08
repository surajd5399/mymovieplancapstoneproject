import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bookings } from 'src/model/Bookings';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { BookingsmasterComponent } from './bookingsmaster/bookingsmaster.component';
import { ChangeuserpasswordComponent } from './changeuserpassword/changeuserpassword.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LandingComponent } from './landing/landing.component';
import { MoviemasterComponent } from './moviemaster/moviemaster.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewuserbookingsComponent } from './viewuserbookings/viewuserbookings.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'signup',component:SignupComponent},  
  {path:'checkout',component:CheckoutComponent},
  {path:'bookingdetails',component:BookingdetailsComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'adminpanel',component:AdminpanelComponent, children:[
    {path:'userlist', component:UserlistComponent},
    {path:'details/:usrname',component:DetailsComponent},
    {path:'update/:usrname', component:UpdateuserComponent},
    {path:'addmovie', component:AddmovieComponent},
    {path:'moviemaster', component:MoviemasterComponent},
    {path:'bookingsmaster',component:BookingsmasterComponent}
  ]},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'userdashboard',component:UserdashboardComponent, children:[
   {path:'changepassword',component:ChangeuserpasswordComponent},
   {path:'bookings',component:ViewuserbookingsComponent},
   {path:'update/:usrname',component:UpdateuserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
