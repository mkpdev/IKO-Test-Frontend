import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/i18n';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ShopComponent, data: { title: extract('Shop') } },
  { path: 'product/:id', component: ProductDetailComponent, data: { title: extract('Product') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
