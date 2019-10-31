import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductsComponent } from './components/products/products.component';
import { MapComponent } from './components/map/map.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { ProductInShopComponent } from './components/product-in-shop/product-in-shop.component';

const routes: Routes = [
  { component: MapComponent, path: "" },
  { component: LoginComponent, path: "login" },
  { component: RegisterComponent, path: "register" },
  { component: SearchComponent, path: "search" },
  { component: ShopsComponent, path: "shops" },
  { component: ProductsComponent, path: "products-all" },
  {component:ShopDetailComponent,path:"shop-detail/:id"},
  {component:ProductInShopComponent,path:"products/:id"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
