import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { user } from 'src/model/user';
import { LoginService } from 'src/service/login.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-changeuserpassword',
  templateUrl: './changeuserpassword.component.html',
  styleUrls: ['./changeuserpassword.component.css']
})
export class ChangeuserpasswordComponent {
  oldpass:string;
  newpass:string;
  newpassre:string;
  currentuser:user;
  constructor(private loginservice:LoginService, private userservice:UserService, private location:Location){}
  ngOnInit(){
    this.currentuser=this.loginservice.getCurrentUsr();
  }

  changepassword(){
    if(this.oldpass==this.currentuser.password){
      if(this.newpass==this.newpassre){
        this.currentuser.password=this.newpass;
        this.userservice.updateUser(this.currentuser).subscribe(res=>{if(res.status=="1"){alert('Password Changed Successfully! Please login again to continue.')}});
        this.loginservice.logout();
        this.location.back();
      }
    }else{
      alert('Please check your old password');
      this.oldpass='';
      this.newpass='';
      this.newpassre='';
    }
  }
}
