import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(public api: ApiService) { }

  getAllShops() {
     this.api.get("")
  }
}
