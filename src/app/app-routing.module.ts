import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CartComponent } from './components/cart-components/cart/cart.component';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  { path: 'product', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'submit', component: SubmitPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
