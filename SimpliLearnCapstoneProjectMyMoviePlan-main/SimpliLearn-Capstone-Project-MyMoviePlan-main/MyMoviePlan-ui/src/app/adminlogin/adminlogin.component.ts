import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/model/admin';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  admin:admin = new admin();
  constructor(private loginservice:LoginService, private router:Router){}

  adminLogin(){
    this.admin.userName=this.admin.email;
    this.loginservice.adminAuth(this.admin).then(res=>{
      if(res){
        this.router.navigateByUrl("adminpanel");
      }
    });
      
  }

}
