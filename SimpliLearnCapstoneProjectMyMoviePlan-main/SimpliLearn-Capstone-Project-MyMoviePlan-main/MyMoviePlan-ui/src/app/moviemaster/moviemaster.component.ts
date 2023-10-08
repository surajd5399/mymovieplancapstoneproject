import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { movie } from 'src/model/movie';
import { MovieService } from 'src/service/movie.service';

@Component({
  selector: 'app-moviemaster',
  templateUrl: './moviemaster.component.html',
  styleUrls: ['./moviemaster.component.css']
})
export class MoviemasterComponent {
  movies:movie[];
  constructor(private movieservice:MovieService, private router:Router){}
  ngOnInit(){
    this.movieservice.getAllMovies().subscribe(res=>{this.movies=res;});
  }
  toggleChanged(id:number,event:MatSlideToggleChange){
    let mv:movie={
      "movieId":id,
      "status":event.checked,
      "title":"",
    "genre":"",
    "rating":0,
    "releasedate":new Date,
    "actors":[],
    "runtime":0,
    "language":"",
    "imageUrl":"",
    "director":"",
    "moviePrice":0,
    }
    this.movieservice.changestatus(mv).subscribe(res=>{});
  }
  navigateToAddMovie(){
    this.router.navigate(["adminpanel/addmovie"]);
  }
}
