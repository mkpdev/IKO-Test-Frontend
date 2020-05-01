import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { ProductService } from '@app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  componentName: string = 'SHOP';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    public productService: ProductService
  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.url.includes('/shop')){
          this.componentName = 'SHOP'
        }
        if(event.url.includes('/product')) {
          this.componentName = 'PRODUCT'
        }
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  // redirect to previous element
  redirectPrevious() {
    this.router.navigate([this.previousUrl]);  
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
