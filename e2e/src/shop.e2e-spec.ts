import { ShopPage } from './page-objects/shop.po';
import { browser, element, by } from 'protractor';

describe('Shop tests', () => {
  let page: ShopPage;

  beforeEach(async () => {
    page = new ShopPage();
    await page.route();
  });

  it('should render list', async () => {
    expect(element.all(by.id('products')).count()).toBeGreaterThan(1);
  });

  it('get first card details', async () => {
    await element(by.css('app-product-card h6')).getText()
  });
});
