import { cartitem } from "./cartitem";

export class Cart{
    items:cartitem[]=[];

    get totalprice():number{
    let totalprice:number = 0;
        this.items.forEach(item=>{totalprice+=item.price});
        return totalprice;
        
    }
    

}