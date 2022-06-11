import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { CartComponent } from './components/cart-components/cart/cart.component';
import { FormComponent } from './components/cart-components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubmitPageComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CartComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
