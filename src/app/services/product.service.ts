import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // http request to get list of products
  getProducts() {
    return this.http.get(environment.serverUrl+'products');
  }

  // http request to get product by id
  getProductById(id: number) {
    return this.http.get(environment.serverUrl+'products/'+id);
  }
}
