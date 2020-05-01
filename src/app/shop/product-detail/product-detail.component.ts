import { Component, OnInit } from '@angular/core';
import { Product } from '@app/model/product';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  id: number;
  details: Product;

  galleryThumbs: any = {
    direction: 'horizontal',
    el: '.dots',
    slidesPerView: 4,
    observer: true,
  };


  config: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    slidesPerView: 1,
    mousewheel: false,
    navigation: true,
    allowTouchMove: true,
    loopedSlides: 5,
    thumbs: {
      swiper: this.galleryThumbs,
    },
    keyboard: true,
  };

  relatedConfig: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    slidesPerView: 2,
    mousewheel: false,
    navigation: true,
    allowTouchMove: true,
    spaceBetween: 10,
  };

  relatedProducts: Product[];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getProduct();
    this.getAllProducts();
  }

  // http request to find product by id
  getProduct() {
    this.productService.getProductById(this.id).subscribe(
      (data: Product) => {
        this.details = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.relatedProducts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
