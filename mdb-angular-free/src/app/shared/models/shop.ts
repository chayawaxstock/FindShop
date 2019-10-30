import { Category } from "./category";
import { ProductInShop } from "./product-in-shop";
import { User } from "./user";

export class Shop {
    id: number;
    name: string;
    description: string;
    lat: number;
    lon: number;
    address: string;
    imageShop: string;
    categories: Category[] = [];
    productsInShop: ProductInShop[] = [];
    users: User[] = []
}
