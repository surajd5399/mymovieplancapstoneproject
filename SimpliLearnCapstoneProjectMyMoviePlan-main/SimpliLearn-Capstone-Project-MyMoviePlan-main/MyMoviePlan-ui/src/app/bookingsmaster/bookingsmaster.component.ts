import { Component } from '@angular/core';
import { Bookings } from 'src/model/Bookings';
import { BookingService } from 'src/service/booking.service';

@Component({
  selector: 'app-bookingsmaster',
  templateUrl: './bookingsmaster.component.html',
  styleUrls: ['./bookingsmaster.component.css']
})
export class BookingsmasterComponent {
  bkngs:Bookings[];
  constructor(private bookingservice:BookingService){}
  ngOnInit(){
    this.bookingservice.getAllBookings().subscribe(res=>{this.bkngs=res;})
  }
}
