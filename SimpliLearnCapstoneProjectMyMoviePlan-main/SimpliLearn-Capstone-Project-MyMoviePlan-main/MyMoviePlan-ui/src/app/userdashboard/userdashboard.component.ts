import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/model/user';
import { LoginService } from 'src/service/login.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
currentuser:string;
currntuser:user;
constructor(private loginservice:LoginService, private userservice:UserService, private router:Router){}
ngOnInit(){
 this.currentuser= this.loginservice.getCurrentUser();
 this.currntuser=this.loginservice.getCurrentUsr();
  if(this.currentuser=="0" && this.currntuser.uid ==-1){
  this.currentuser='Guest';
 this.router.navigateByUrl('forbidden');
 }
}
}
