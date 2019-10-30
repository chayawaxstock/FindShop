import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shared/services/shop.service';
import { Shop } from 'src/app/shared/models/shop';
import { PlacePoint } from 'src/app/shared/models/place-point';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  allShops: Shop[] = [];
  placePoint: PlacePoint = new PlacePoint();
  constructor(public shopService: ShopService,
    public router: Router) { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.placePoint.lat = position.coords.latitude;
        this.placePoint.long = position.coords.longitude;
        this.shopService.getShopsByPlace(this.placePoint).subscribe(res => {
          this.allShops = res;
        })
      });
    }
  }

  choose(id) {
    this.router.navigate(['shop-detail', id]);
  }

}
