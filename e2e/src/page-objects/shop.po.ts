import { browser, element, by } from 'protractor';

export class ShopPage {
  route() {
    return browser.get('/shop');
  }

  getProducts() {
    return element.all(by.id('products')).count();
  }
}
