import template from './template.html';

class SidebarController {
  constructor(router, routeUrls) {
    this.router = router;
    this.routeUrls = routeUrls;

    this.createNavigationItems();
  }

  createNavigationItems() {
    this.navItems = [
      {title: 'Dashboard', url: this.routeUrls.dashboard, cssClass: 'dashboard' },
      {title: 'Products', url: this.routeUrls.products, cssClass: 'table' }
    ];
  }

  goTo(url) {
    this.router.goTo(url);
  }
}

let sidebar = {
  bindings: {},
  controller: SidebarController,
  templateUrl: template
};

export default sidebar