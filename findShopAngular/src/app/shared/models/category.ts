import { Product } from "./product";
import { Shop } from "./shop";
import { Size } from "./size";

export class Category {
    id:number
    name:string;
    products:Product[];
    shops:Shop[];
    Sizes:Size[];
}
