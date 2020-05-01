import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent } from './shop.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { element, by } from 'protractor';
import { ProductService } from '@app/services/product.service';
import { of } from 'rxjs';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShopComponent],
      providers: [HttpClient, HttpHandler, ProductService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Page Title should be "SHOP"', () => {
    const service = TestBed.get(ProductService);
    expect(service.pageTitle).toEqual('SHOP');
  });

  // it('method should be called', () => {
  //   var spy = spyOn(component, 'getProducts').and.callThrough();
  //   expect(component).toBeDefined();
  //   expect(spy);
  //   expect(component.getProducts).toHaveBeenCalled();
  // });
});
