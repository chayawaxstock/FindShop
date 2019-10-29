import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductsComponent } from './components/products/products.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { component: MapComponent, path: "" },
  { component: LoginComponent, path: "login" },
  { component: RegisterComponent, path: "register" },
  { component: SearchComponent, path: "search" },
  { component: ShopsComponent, path: "shops" },
  { component: ProductsComponent, path: "products-all" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
