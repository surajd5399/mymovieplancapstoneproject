import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/model/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  user:user;
  constructor(private usrService:UserService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(){
    
    const username = this.route.snapshot.paramMap.get('usrname');
    this.usrService.getUserByName(String(username)).subscribe(data=>this.user=data);
  }
  navigateToUserlist(){
    this.router.navigate(['/adminpanel/userlist']);
  }
  navigateToUpdate(param:string){
    this.router.navigate(['/adminpanel/update',param])
  }
}
