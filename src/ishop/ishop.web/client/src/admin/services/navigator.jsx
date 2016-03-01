class NavigatorService {
  constructor(router, routeUrls) {
    this.router = router;
    this.routeUrls = routeUrls;
    this.navigationItems = this.getNavigationItems();
  }

  getNavigationItems() {
    return [
      {title: 'Dashboard', url: this.routeUrls.dashboard, cssClass: 'dashboard' },
      {title: 'Products', url: this.routeUrls.products, cssClass: 'table' }
    ];
  }

  getCurrentNavigationItem() {
    return _.find(this.navigationItems, { url: this.router.getCurrentUrl() });
  }
}

export default NavigatorService