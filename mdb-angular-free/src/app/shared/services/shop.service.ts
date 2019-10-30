import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { PlacePoint } from '../models/place-point';
const perfix = 'Shop/'
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(public api: ApiService) { }

  getAllShops() {
    this.api.get("")
  }

  getShopDetail(id) {
   return this.api.get(perfix + "GetShopDetail/"+id)
  }

  getShopsByPlace(placePoint: PlacePoint) {
    return this.api.post(perfix + "GetShopsByPlace", placePoint);
  }
}
