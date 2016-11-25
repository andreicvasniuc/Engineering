class Navigator {
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
    return _.find(this.navigationItems, (item) => this.router.doesUrlContain(item.url));
  }
}

export default Navigator