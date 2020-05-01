import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ProductCardComponent],
  exports: [LoaderComponent, ProductCardComponent],
})
export class SharedModule {}
