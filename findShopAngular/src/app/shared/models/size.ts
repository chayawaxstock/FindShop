import { Category } from "./category";
import { Product } from "./product";

export class Size {
    sizeId: number;
    sizeName: string;
    categories: Category[] = [];
    products: Product[] = [];
}
