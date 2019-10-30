import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/shared/services/shop.service';
import { Shop } from 'src/app/shared/models/shop';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  shop: Shop = new Shop();

  constructor(private route: ActivatedRoute,
    public shopService: ShopService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shopService.getShopDetail(Number(params.get("id"))).subscribe(res => {
        this.shop = res;
        this.refresh();
      })
    });
  }

  refresh() {
    if (!this.cd['destroyed']) {
      this.cd.detectChanges();
    }
  }

}
