import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/model/movie';
import { MovieService } from 'src/service/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
  movie:movie = new movie();
  actortemp:string="";
  constructor(private mvservice:MovieService, private location:Location){}
  ngOnInit(){
    this.movie.actors=[];
  }
  addActor(){ 
    if(this.actortemp !==""){
    this.movie.actors.push(this.actortemp);
    this.actortemp='';
    
    }
  }
  saveMovie(){
    this.mvservice.addMovie(this.movie).subscribe(res=>console.log(res));
    this.location.back();
  }
}
