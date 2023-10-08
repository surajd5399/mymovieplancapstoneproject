import { Component } from '@angular/core';
import { movie } from 'src/model/movie';
import { CartService } from 'src/service/cart.service';
import { MovieService } from 'src/service/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  movies:movie[];
 

  constructor(private movieService:MovieService,private cartservice:CartService){}  
  ngOnInit(){
    this.movieService.getAllMovies().subscribe(data=>{
      this.movies = data;
      this.movies=this.movies.filter(x=>x.status);
    });
    
    
  }

  click(movieId:number){
    let  mv1:movie;
    this.movieService.getMovieById(movieId).subscribe(data=>{
      mv1 = data;
     this.cartservice.addToCart(mv1);
    });   
  }

}


