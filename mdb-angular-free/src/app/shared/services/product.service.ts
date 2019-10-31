import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const perfix = 'Product/'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public api: ApiService) { }

  getProductsShop(idShop) {
    return this.api.get(perfix + "GetProductsShop/"+idShop);
  }
}
