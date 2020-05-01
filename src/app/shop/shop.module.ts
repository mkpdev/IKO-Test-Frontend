import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from '@app/@shared';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [ShopComponent, ProductDetailComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule, SwiperModule],
})
export class ShopModule {}
