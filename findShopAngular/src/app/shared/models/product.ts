import { Manufacturer } from "./manufacturer";
import { Company } from "./company";
import { Size } from "./size";
import { Category } from "./category";
import { Image } from "./image";
import { ProductInShop } from "./product-in-shop";

export class Product {
    productId: number;
    name: string;
    description: string;
    sku: string;
    skuGroup: string;
    price: string;
    manufacturer: Manufacturer;
    company: Company;
    color: string;
    Sizes: Size[];
    categories: Category[];
    images: Image[];
    productInShops: ProductInShop[];
}
