import { Injectable }    from '@angular/core';

import { Navigation } from '../models/navigation';

@Injectable()
export class NavigationService {
  public navigation: Navigation;

  constructor() {
    this.createNavigation();
  }

  createNavigation(): void {
    this.navigation = new Navigation('fSociety shop');

    this.navigation.menuItems = [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' }
    ];
  }

  getNavigation(): Navigation {
    return this.navigation;
  }

}
