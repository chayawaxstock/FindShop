import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from 'src/app/shared/services/shop.service';
import { Shop } from 'src/app/shared/models/shop';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-in-shop',
  templateUrl: './product-in-shop.component.html',
  styleUrls: ['./product-in-shop.component.scss']
})
export class ProductInShopComponent implements OnInit {
  products: Product[] = [];
  shop: Shop = new Shop();

  extType: any = "application/pdf";

  public filesExtensions = {

    'pdf': 'application/pdf',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'png': 'image/png',
    'xml': 'application/xml',
    'doc': 'application/msword',
    'csv': 'text/csv',
    'txt': 'text/plain'
  }

  constructor(public route: ActivatedRoute,
    public productService: ProductService,
    public shopService: ShopService,
    private cd: ChangeDetectorRef,
    public sanitizer: DomSanitizer,
    public router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shopService.getShopDetail(Number(params.get("id"))).subscribe(res => {
        this.shop = res;
        this.refresh();
      })
      this.productService.getProductsShop(Number(params.get("id"))).subscribe(res => {
        this.products = res;
        this.products.forEach(product => {
          product.images.forEach(image=>{
            var splitted = image.imageName.split(".", 1)[0]; 
            var blob = this.dataURItoBlob(image.targetContent,splitted);
            var url = window.URL.createObjectURL(blob);
            image.imageShow=this.sanitizer.bypassSecurityTrustResourceUrl(url);
          })
        })
        this.refresh();
      })
    });
  }

  refresh() {
    if (!this.cd['destroyed']) {
      this.cd.detectChanges();
    }
  }

  //יצירת בלוב 
  dataURItoBlob(dataURI,type) {
    var binary = atob(dataURI);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: this.filesExtensions[type]
    });
  }

  choose(id) {
    this.router.navigate(['product', id]);
  }


}
