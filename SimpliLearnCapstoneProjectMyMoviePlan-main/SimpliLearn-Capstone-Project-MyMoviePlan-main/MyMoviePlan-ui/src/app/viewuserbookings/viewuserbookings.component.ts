import { Component } from '@angular/core';
import { Bookings } from 'src/model/Bookings';
import { user } from 'src/model/user';
import { BookingService } from 'src/service/booking.service';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-viewuserbookings',
  templateUrl: './viewuserbookings.component.html',
  styleUrls: ['./viewuserbookings.component.css']
})
export class ViewuserbookingsComponent {
  currntusr:user;
  userbookings:Bookings[];
  constructor(
    private loginservice:LoginService,
    private bookingservice:BookingService
  ){}
  ngOnInit(){
    this.currntusr = this.loginservice.getCurrentUsr();
    this.bookingservice.getBookingsForUser(this.currntusr).subscribe(res=>{this.userbookings=res;});
  }
}
