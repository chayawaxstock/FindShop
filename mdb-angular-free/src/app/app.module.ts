import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ShopDetailComponent } from './components/shop-detail/shop-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateShopComponent } from './components/create-shop/create-shop.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditShopComponent } from './components/edit-shop/edit-shop.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { MdbImageModalComponent } from './shared/components/mdb-image-modal/mdb-image-modal.component';
import { Card1TemplateComponent } from './components/card1-template/card1-template.component';
//-------------------services
import { ApiService } from './shared/services/api.service';
import { ShopService } from './shared/services/shop.service';

//----------------------modules
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { CarouselModule, ModalModule, WavesModule } from 'angular-bootstrap-md';
import { MapDirectionComponent } from './components/map-direction/map-direction.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShopsComponent,
    ShopDetailComponent,
    SearchComponent,
    ProductsComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    CreateShopComponent,
    AddProductComponent,
    EditShopComponent,
    EditProductComponent,
    AddUserComponent,
    EditUserComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    MapComponent,
    MdbImageModalComponent,
    Card1TemplateComponent,
    MapDirectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule, ModalModule, WavesModule,
    AgmCoreModule.forRoot({
      language:"iw",
      apiKey: 'AIzaSyB6XGmiIhsaoXzLTu611HLGNL74ZEWIaSE',
      libraries: ['places']
    }),
    AgmDirectionModule
  ],
  providers: [
    ApiService,
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
