import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Bookings } from 'src/model/Bookings';
import { status } from 'src/model/status';
import { user } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl:string='http://localhost:8080/api/bookings';
  constructor(private http:HttpClient) { }

  getAllBookings():Observable<Bookings[]> {
    return this.http.get<Bookings[]>(this.baseUrl+"/all");
  }

  getBookingsForUser(Usr:user):Observable<Bookings[]>{
    return this.http.post<Bookings[]>(this.baseUrl+"/user",Usr);
  }
  saveBooking(bk:Bookings):Observable<status>{
    return this.http.post<status>(this.baseUrl+"/saveBooking",bk);
  }
}
