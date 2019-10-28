import { Shop } from "./shop";

export class User {
    userId: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    phone: string;
    shop: Shop = new Shop();
}
