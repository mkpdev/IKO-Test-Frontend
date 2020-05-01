import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/services/product.service';
import { Product } from '@app/model/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // method to get products list
  getProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
