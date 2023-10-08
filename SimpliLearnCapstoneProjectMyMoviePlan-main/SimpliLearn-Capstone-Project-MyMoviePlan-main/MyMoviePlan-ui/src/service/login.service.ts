import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { admin } from 'src/model/admin';
import { adminauth } from 'src/model/adminauth';
import { user } from 'src/model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentuser:string="0";
  curntuser:user={
    "uid":-1,
      "firstName":"",
      "middleName":"",
      "lastName":"",
      "userName":"",
      "email":"",
      "password":"",
      "country":""
  };
  baseUrl:string='http://localhost:8080/api/admin';
  userauthstatus:boolean = false;
  adminauthstatus:boolean=false;
  constructor(private http:HttpClient, private usrservice:UserService) { }
  
  async adminAuthentication(admin:admin):Promise<adminauth>{
    var adminauth:adminauth;
    adminauth={
      "admin":"",
      "authentication":""
    }
  const res = await firstValueFrom(this.http.post<adminauth>(this.baseUrl+"/authenticate",admin));
  adminauth=res;
  return adminauth; 
  }

 async adminAuth(ad:admin){
    var adminauth1:adminauth; 
   await this.adminAuthentication(ad).then(res=>{
      adminauth1=res;
    if(adminauth1.authentication=="1"){
      this.adminauthstatus=true;
    }else if(adminauth1.authentication=="0"){
      this.adminauthstatus=false;
    }
  });
    this.currentuser="admin"
    return this.adminauthstatus;
  }
 
  async authUser(user:user):Promise<{"user":string,"authentication":string}>{
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var usr:user = {
      "uid":-1,
      "firstName":"",
      "middleName":"",
      "lastName":"",
      "userName":"",
      "email":"",
      "password":"",
      "country":""
    }
    var userauthstatus={
      "user":"",
      "authentication":"not found"
    }
    if(user.email.match(re)){
      await firstValueFrom(this.usrservice.getUserByName(user.email)).then(res=>usr=res);
    }else{
      await firstValueFrom(this.usrservice.getUserByName(user.email)).then(res=>usr=res);
    }
    if(usr){
      userauthstatus.user="1";
      if(usr.password==user.password){
        userauthstatus.authentication="1"
        this.currentuser=usr.firstName+' '+usr.lastName;
        this.userauthstatus=true;
        this.curntuser=usr;
        
      }else{
        userauthstatus.authentication="0"
      }
    }else{
      userauthstatus.user="0";
    }
    return userauthstatus;
  }
  getCurrentUser():string{
    return this.currentuser;
  }
  getCurrentUsr():user{
    return this.curntuser;
  }
  logout(){
    this.userauthstatus=false;
    this.adminauthstatus=false;
    this.currentuser="0";
    this.curntuser ={
      "uid":-1,
      "firstName":"",
      "middleName":"",
      "lastName":"",
      "userName":"",
      "email":"",
      "password":"",
      "country":""
    };
    alert('Logout Successful')
  }
    
}
