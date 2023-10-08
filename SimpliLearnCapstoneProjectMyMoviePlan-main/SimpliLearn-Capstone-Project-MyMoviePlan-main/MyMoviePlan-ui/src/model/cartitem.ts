import { movie } from "./movie";

export class cartitem{
    quantity:number = 1;
    movie:movie;
    constructor(movie:movie){
        this.movie=movie;
    }
    get price():number{
        return this.movie.moviePrice*this.quantity;
    }
}