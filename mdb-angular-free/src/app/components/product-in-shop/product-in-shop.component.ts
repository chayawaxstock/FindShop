import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from 'src/app/shared/services/shop.service';
import { Shop } from 'src/app/shared/models/shop';

@Component({
  selector: 'app-product-in-shop',
  templateUrl: './product-in-shop.component.html',
  styleUrls: ['./product-in-shop.component.scss']
})
export class ProductInShopComponent implements OnInit {
  products: Product[] = [];
  shop: Shop=new Shop();

  constructor(public route: ActivatedRoute,
    public productService: ProductService,
    public shopService:ShopService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shopService.getShopDetail(Number(params.get("id"))).subscribe(res => {
        this.shop = res;
        this.refresh();
      })
      this.productService.getProductsShop(Number(params.get("id"))).subscribe(res => {
        this.products = res;
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
