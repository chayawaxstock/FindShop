import { Shop } from "./shop";
import { Product } from "./product";

export class ProductInShop {
    productInShopId:number;
    shopId:number;
    shop:Shop;
    productId:number;
    Product:Product;
    stock:number;
}
