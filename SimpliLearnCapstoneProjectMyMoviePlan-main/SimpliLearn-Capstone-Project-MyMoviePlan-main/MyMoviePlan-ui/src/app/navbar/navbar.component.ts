import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentuser:string;
  login:boolean=true;
  constructor(private loginservice:LoginService,private router:Router){

    }
    ngOnInit():void{
      
     this.currentuser= this.loginservice.getCurrentUser();
     if(this.currentuser=="0"){
       this.currentuser='Guest'
       this.login=false;
     }
    
     }
     logout(){
      this.loginservice.logout();
      this.currentuser= this.loginservice.getCurrentUser();
      if(this.currentuser=="0"){
        this.currentuser='Guest'
        this.login=false;
      }
      this.router.navigateByUrl("");
     }
}
